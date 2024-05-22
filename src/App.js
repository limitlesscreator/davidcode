import s from './app.module.sass'
import Typed from "typed.js";
import {useEffect, useRef} from "react";

function App() {

    let marginLeftOur = s.standardLittle


    let htmlFirstLet = useRef(null)
    let htmlSecondLet = useRef(null)


    let titleFirstLet = useRef(null)
    let titleSecondLet = useRef(null)

    let thatstudiotext = useRef(null)

    useEffect(() => {

        // let typed =
        new Typed(htmlFirstLet.current, {
            strings: [
                `<span class='htmlOur' >&lt;HTML></span> <br>` +
                `<span class='h1'>THAT STUDIO</span> <br>` +
                `<span class='standard'>&lt;title> <span style="color: #D8DEE9">Art and Dev Outsourcing</span> &lt;/title></span> <br>` +
                `<span class='standard'>&lt;body></span> <br>` +
                `<span  class='standard' style=" margin-left: 30px;">&lt;<span style="color: #00DEDE;">servises</span>> <br></span>` +
                `<span  class='standardLittle' style=" margin-left: 70px;">&lt;li> <span style="color: #F15B63">Computer Graphic</span>  &lt;/li></span> <br>` +
                `<span  class='standardLittle' style=" margin-left: 70px;">&lt;p> <span style="color: #D8DEE9">Modeling, texturing, animation, 3D scanning, </span></span> <br>` +
                `<span class="standardLittle"><span class="marginAdap"  style="color: #D8DEE9;">simulation, tech art and integration</span>  &lt;/p></span> <br><br>` +
                `<span  class='standardLittle' style=" margin-left: 70px;">&lt;li> <span style="color: #F15B63">Development</span>  &lt;/li></span> <br>` +
                `<span  class='standardLittle' style=" margin-left: 70px;">&lt;p> <span style="color: #D8DEE9">Web, mobile app and video games, Web GL, Unity,</span></span> <br>` +
                `<span class="standardLittle"><span class="marginAdap"  style="color: #D8DEE9;">Unreal Engine, AR and VR</span>  &lt;/p></span> <br>` +
                `<span  class='standard' style=" margin-left: 30px;">&lt;<span ">/servises</span>> <br><br></span>` +
                `<span  class='standard' style=" margin-left: 30px;">&lt;<span style="color: #00DEDE;">contact</span>> <br></span>` +
                `<span class="standardLittle" style=" margin-left: 70px;"> <a href="https://t.me/david_young_tg">&lt;a href=" <span style="color: #D8DEE9">https://t.me/david_young_tg</span>"> <span  style="color: #F15B63">telegram</span> &lt;/a></a> </span> <br>`+
                `<span class="standardLittle" style=" margin-left: 70px;"> <a href="https://wa.me/16464174650">&lt;a href=" <span style="color: #D8DEE9">https://wa.me/16464174650</span>"> <span  style="color: #F15B63">whatsapp</span> &lt;/a></a> </span> <br>` +
                `<span class="standardLittle" style=" margin-left: 70px;"> <a href="tel:16464174650">&lt;a href=" <span style="color: #D8DEE9">+16464174650</span>"> <span  style="color: #F15B63">phone</span> &lt;/a></a> </span> <br>` +
                `<span class="standardLittle" style=" margin-left: 70px;"> <a href="mailto:david.young.info@gmail.com">&lt;a href=" <span style="color: #D8DEE9">david.young.info@gmail.com</span>"> <span  style="color: #F15B63">email</span> &lt;/a></a> </span> <br>`+
                `<span  class='standard' style=" margin-left: 30px;">&lt;<span ">/contact</span>> <br><br></span>` +
                `<span class='standard'>&lt;/body></span> <br>`  +
                `<span class='htmlOur' >&lt;/HTML></span>`

            ],
            backSpeed: 220,
            backDelay: 200,
            onComplete(self) {
                document.querySelector('.typed-cursor').style.fontSize = '35px'
                document.querySelector('.typed-cursor').style.color = '#444242'
            }
        })


        // return () => {
        //     // Destroy Typed instance during cleanup to stop animation
        //     typed.destroy();
        // };
    }, [])

    return (
        <div className={s.container}>

            <div className={s.zoom}>
                <span ref={htmlFirstLet}></span>
            </div>

        </div>
    );
}

export default App;
