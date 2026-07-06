import './Diagnosis.css'
import '../Page.css'
import Header from '../../Components/Header/Header.jsx'
import Title from '../../Components/Title/Title.jsx'

function Diagnosis() {
    return (
        <div>
            <Header page = '/Diagnosis'/>
            <div className = 'body'>
                <aside>
                    <Title 
                        text1 = 'DIAGNOSIS · 03'
                        text2 = '현황'
                        text3 = '진단'
                    />
                </aside>
            </div>
        </div>
    )
}

export default Diagnosis