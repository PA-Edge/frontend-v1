import React, { useRef, useEffect, useState } from "react"
import { NavLink } from 'react-router-dom'
import { Group, Image } from "@mantine/core"
import logo from "./images/EDGE_logo.png";
import './navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons'
import voiceToText from '../voiceToText.json';
import { getTokenOrRefresh } from './token_util';
import { ResultReason } from 'microsoft-cognitiveservices-speech-sdk';
import { useNavigate, Link } from "react-router-dom"

export default function NavBar() {

  const [displayText, setDisplayText] = useState("Voice Navigation");
  const [alertText, setAlertText] = useState("");
  const [inputText, setInputText] = useState("");
  const [alertFootnote, setAlertFootnote] = useState("");
  const [errorDiv, setErrorDiv] = useState("noError");
  const [button, setButton] = useState("buttonHidden");
  const [noClick, setNoClick] = useState("");
  let navigate = useNavigate();

  const speechsdk = require('microsoft-cognitiveservices-speech-sdk')

  const resetAlert = () => {
    setErrorDiv('noError');
    setAlertText('');
    setInputText('');
    setAlertFootnote('');
    setButton('buttonHidden')
  }

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          resetAlert();
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const computeRoute = (groomedText, route) => {
    let years = ["2018", "2019", "2020", "2021", "2022"];
    let navigatedWithYear = false;
    if (route === "/damage-ratio") {
      years.unshift("2017")
    }
    years.every((year, i) => {
      if (groomedText.includes(year)) {
        navigatedWithYear = true;
        navigate(route, { state: { id: 1, year: year } });
        return false;
      }
      else return true;
    });
    if (!navigatedWithYear) {
      console.log('Navigating without year')
      navigate(route);
    }
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  async function sttFromMic() {
    setNoClick('noClick')
    const tokenObj = await getTokenOrRefresh();
    if (tokenObj.error) {
      setButton('buttonActive');
      setAlertText(`ERROR: Could not connect to the Azure Speech Service`);
      setAlertFootnote(`Make sure you're connected to the Southern Company Network`);
      setErrorDiv('errorDiv');
    }
    const speechConfig = speechsdk.SpeechConfig.fromAuthorizationToken(tokenObj.authToken, tokenObj.region);
    speechConfig.speechRecognitionLanguage = 'en-US';

    const audioConfig = speechsdk.AudioConfig.fromDefaultMicrophoneInput();
    const recognizer = new speechsdk.SpeechRecognizer(speechConfig, audioConfig);

    setDisplayText('Speak into your microphone...')

    recognizer.recognizeOnceAsync(result => {
      setNoClick('')
      if (result.reason === ResultReason.RecognizedSpeech) {
        let text = result.text;
        console.log(text)
        let groomedText = text.toLowerCase();
        let validText = false;
        voiceToText.inputs.every((input, i) => {
          if (groomedText.includes(input.text)) {
            validText = true;
            resetAlert();
            computeRoute(groomedText, input.route)
            return false;
          } else return true;
        });
        if (!validText) {
          setButton('buttonActive');
          setAlertText(`No valid command found for:`);
          setInputText(`"${result.text}"`);
          setAlertFootnote('Try saying "HOME", "DAMAGE RATIO", "DAMAGE RATIO INSIGHTS", or "LOCATOR AT-FAULT RATIO" instead!');
          setErrorDiv('errorDiv');
        }
      } else {
        setButton('buttonActive');
        setAlertText('ERROR: Speech was cancelled or could not be recognized.');
        setAlertFootnote('Ensure your microphone is working properly.');
        setErrorDiv('errorDiv');
      }

      setDisplayText(displayText);
    });
  }

  return (
    <>
      <Group position="left" className="nav">
        <Group>
          <Link to="/" className="logo">
            <Image width={97} src={logo} alt="EDGE" />
          </Link>
          <NavLink className="buttons" exact={true} to="/" end>
            Home
          </NavLink>
          <NavLink className="buttons" exact={true} to="/damage-ratio" end>
            Damage Ratio
          </NavLink>
          <NavLink to="/damage-ratio-insights" className="buttons">
            Damage Ratio Insights
          </NavLink>
          <NavLink to="/locator-at-fault-ratio" className="buttons">
            Locator At-Fault Ratio
          </NavLink>
        </Group>
        <div className={`micButton ${noClick}`} type='button' onClick={() => sttFromMic()}>
          {displayText}
          <FontAwesomeIcon className="micIcon" icon={faMicrophone} size="lg" />
        </div>
      </Group>
      <div className={errorDiv} ref={wrapperRef}>
        <button className={button} onClick={() => resetAlert()}>X</button>
        <div className="alertText">{alertText}</div>
        <div className="inputText">{inputText}</div>
        <div className="alertFootnote">{alertFootnote}</div>
      </div>
    </>
  )
}
