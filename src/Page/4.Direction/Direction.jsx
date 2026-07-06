import './Direction.css'
import '../Page.css'
import Header from '../../Components/Header/Header.jsx'
import Title from '../../Components/Title/Title.jsx'

function Direction() {
    return (
        <div>
            <Header page = '/Direction'/>
            <div className = 'body'>
                <aside>
                    <Title 
                        text1 = 'DIRECTION · 04'
                        text2 = '리빌딩'
                        text3 = '방향'
                    />
                </aside>
            </div>
        </div>
    )
}

export default Direction