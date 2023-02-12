import React, { useState } from "react";
import "./Honeycomb.scss";

export default function Honeycomb() {
  const buttonClick = () => {
    
  }
  return (
    <ul class="hex-grid__list">
      <li class="hex-grid__item">
        <button class="hex-grid__content">
          
        </button>
        <div class="hex-grid__inner-hex">
            1
          </div>
      </li>
      <li class="hex-grid__item">
        <button class="hex-grid__content">
          <div class="hex-grid__inner-hex">
            2
          </div>
        </button>
      </li>
      <li class="hex-grid__item">
        <button class="hex-grid__content" onClick={buttonClick()}>
          <div class="hex-grid__inner-hex">
            3
          </div>
        </button>
      </li>
      <li class="hex-grid__item">
        <button class="hex-grid__content">
          <div class="hex-grid__inner-hex">
            4
          </div>
        </button>
      </li>
      <li class="hex-grid__item">
        <button class="hex-grid__content">
          <div class="hex-grid__inner-hex">
            5
          </div>
        </button>
      </li>
      <li class="hex-grid__item">
        <button class="hex-grid__content">
          <div class="hex-grid__inner-hex">
            6
          </div>
        </button>
      </li>
      <li class="hex-grid__item">
        <button class="hex-grid__content">
          <div class="hex-grid__inner-hex">
            7
          </div>
        </button>
      </li>
      <li class="hex-grid__item">
        <button class="hex-grid__content">
          <div class="hex-grid__inner-hex">
            8
          </div>
        </button>
      </li>
      <li class="hex-grid__item">
        <button class="hex-grid__content">
          <div class="hex-grid__inner-hex">
            9
          </div>
        </button>
      </li>
      <li class="hex-grid__item">
        <button class="hex-grid__content">
          <div class="hex-grid__inner-hex">
            10
          </div>
        </button>
      </li>
    </ul>
  );
}