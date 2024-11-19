'use client';
import React, { useState } from 'react';
import './typing.css';
import { useTheme } from '@/util/ThemeContext';

const typing = () => {
  const { theme, toggleTheme } = useTheme();

  const [inputText, setInputText] = useState('');
  const [progress, setProgress] = useState(0);

  const totalText = `성공하고 인간답게 산다.
그게 더는 고통을 입고 성장할 수 없다는 뜻이라면.
그는 계속 불안해하면서, 초조해하면서 필사적으로 살고 싶었다.
그래서 한계를 뛰어넘고 싶었다.
할 수 있는 데까지.
아이돌로만 살고 싶었다.`;

  const handleInputChange = (e: any) => {
    const currentText = e.target.value;
    console.log('handleInputChange', e.target.value);
    setInputText(currentText);

    // 진행률 계산
    const newProgress = (currentText.length / totalText.length) * 100;
    setProgress(newProgress);
  };

  // 정확도 계산
  const calculateAccuracy = () => {
    if (inputText.length === 0) return 0; // 입력이 없으면 정확도 0%

    const correctChars = inputText.split('').filter((char, index) => char === totalText[index]).length;
    const accuracy = (correctChars / inputText.length) * 100;

    return accuracy.toFixed(2); // 소수점 두 자리까지 반환
  };

  const compareText = (): React.ReactNode => {
    return (
      <>
        {totalText.split('').map((char, index) => {
          const isCorrect = inputText[index] === char;
          const isTyped = index < inputText.length;

          return (
            <span
              key={index}
              style={{
                color: isTyped ? (isCorrect ? 'black' : 'red') : '#ccc', //올바른 문자는 검은색
                textDecoration: isCorrect ? 'none' : 'underline', //틀린 문자에 밑줄
              }}>
              {char}
            </span>
          );
        })}
        ;
      </>
    );
  };

  return (
    <>
      <header>
        <button onClick={toggleTheme}>{theme === 'light' ? '🌙' : '🌞'}</button>
        <span>현재 테마: {theme}</span>
      </header>

      <div className='typing-container'>
        <div className='menu-bar'>
          <span>typing</span>
        </div>
        <div className='progress-bar'>
          <div className='progress' style={{ width: `${progress}%` }}></div>
        </div>
        <div className='accuracy'>정확도 : {calculateAccuracy()} %</div>
        <textarea
          className='typing-area'
          value={inputText}
          onChange={handleInputChange}
          placeholder='Start typing here...'></textarea>
        <div className='original-text'>{compareText()}</div>
      </div>
    </>
  );
};

export default typing;
