import './Outline.css'
import '../Page.css'
import Header from '../../Components/Header/Header.jsx'
import Title from '../../Components/Title/Title.jsx'

function Outline() {
    return (
        <div>
            <Header page = '/'/>
            <div className = 'body'>
                <aside>
                    <Title 
                        className = 'title'
                        text1 = 'OUTLINE · 01'
                        text2 = '제안'
                        text3 = '목차'
                    />
                </aside>
            </div>
        </div>
    )
}

export default Outline