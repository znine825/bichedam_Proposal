import './Design.css'
import '../Page.css'
import Header from '../../Components/Header/Header.jsx'
import Title from '../../Components/Title/Title.jsx'

function Design() {
    return (
        <div>
            <Header page = '/Design'/>
            <div className = 'body'>
                <aside>
                    <Title 
                        text1 = 'DESIGN · 05'
                        text2 = '디자인'
                        text3 = '컨셉'
                    />
                </aside>
            </div>
        </div>
    )
}

export default Design