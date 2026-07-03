import { useState } from 'react'
import './Header.css'


function Header(where) {
    return (
        <div className = 'header'>
           <p>비체담 웹사이트 리빌딩 제안서</p>
           <div classNema = 'menu'>
                <div><p>목차</p></div>
                <div><p>개요</p></div>
                <div><p>진단</p></div>
                <div><p>방향</p></div>
                <div><p>디자인</p></div>
                <div><p>일정</p></div>
           </div>
        </div>
    )
}

export default Header