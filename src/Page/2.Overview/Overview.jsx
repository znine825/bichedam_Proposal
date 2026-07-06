import './Overview.css'
import '../Page.css'
import Header from '../../Components/Header/Header.jsx'
import Title from '../../Components/Title/Title.jsx'

function Overview() {
    return (
        <div>
            <Header page = '/Overview'/>
            <div className = 'body'>
                <aside>
                    <Title 
                        text1 = 'OVERIVEW · 02'
                        text2 = '제안'
                        text3 = '개요'
                    />
                </aside>
            </div>
        </div>
    )
}

export default Overview