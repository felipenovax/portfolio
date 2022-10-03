import React, { useCallback, useEffect, useRef, useState } from 'react'
import './Logo.styles.scss'

const japaneseTitle = 'シニアソフトウェアエンジニア'
const original = 'SENIOR SOFTWARE ENGINEER'
export const Logo = () => {

  return (
    <div className='layout'>
			<div className="container">
				<p className="subtitle glitch" data-text="シニアソフトウェアエンジニア">SENIOR SOFTWARE ENGINEER</p>
				<div className="glitch" data-text="フレンドリーに話す">Felipe Erick dos Santos</div>
				<div className="glow">Felipe Erick dos Santos</div>
			</div>
		</div>
  )
}
