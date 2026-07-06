import './Schedule.css'
import '../Page.css'
import Header from '../../Components/Header/Header.jsx'
import Title from '../../Components/Title/Title.jsx'

function Schedule() {
    return (
        <div>
            <Header page = '/Schedule'/>
            <div className = 'body'>
                <aside>
                    <Title 
                        text1 = 'SCHEDULE · 06'
                        text2 = '개발'
                        text3 = '일정'
                    />
                </aside>
            </div>
        </div>
    )
}

export default Schedule