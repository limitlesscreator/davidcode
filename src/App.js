import s from './app.module.sass'
import Typed from "typed.js";
import {useEffect, useRef} from "react";

function App() {

    let htmlFirstLet = useRef(null)
    let htmlSecondLet = useRef(null)


    let titleFirstLet = useRef(null)
    let titleSecondLet = useRef(null)

    let thatstudiotext = useRef(null)

    useEffect(() => {

       // let typed =
           new Typed(htmlFirstLet.current, {
            strings: ["&lt;BODY>", '&lt;HTML>'],
            typeSpeed: 100,
            backSpeed: 220,
            backDelay: 200,
            onComplete: (self) => {
                self.cursorBlinking = false
                //start title
                new Typed(titleFirstLet.current, {
                    strings: ["&lt;title>"],
                    typeSpeed: 100,
                    backSpeed: 220,
                    backDelay: 200,
                    showCursor: false,
                    onComplete(self) {
                        // смена THAT STUDIO
                        let hOne = document.querySelector('h1')


                        setTimeout(() => {
                            hOne.style.color = '#f15b63'
                        },500)
                        setTimeout(() => {
                            hOne.style.fontSize = '50px'
                        },1000)
                        setTimeout(() => {
                            hOne.style.fontWeight = 'bold'
                        },1500)
                    }
                })
                new Typed(titleSecondLet.current, {
                    strings: ['&lt;/title>'],
                    typeSpeed: 100,
                    backSpeed: 220,
                    backDelay: 200,
                    showCursor: false,
                })
            }
        })
        new Typed(htmlSecondLet.current, {
            strings: ["&lt;BODY>", '&lt;/HTML>'],
            typeSpeed: 100,
            backSpeed: 220,
            backDelay: 200,
            showCursor: false,
        })


        // return () => {
        //     // Destroy Typed instance during cleanup to stop animation
        //     typed.destroy();
        // };
    }, [])

    return (
        <div className={s.container}>
            <div className={s.zoom}>
                <div className={`${s.html}`}><span ref={htmlFirstLet}></span></div>
                <h1 ref={thatstudiotext}>THAT STUDIO</h1>
                <div className={s.standard}> <span ref={titleFirstLet}></span> <span
                    style={{color: '#D8DEE9'}}>Art & Dev Outsourcing</span> <span ref={titleSecondLet}></span>
                </div>
                <div className={s.standard}>&lt;body></div>
                <br/>
                <div style={{marginLeft: '30px'}} className={s.standard}>&lt;<span
                    style={{color: '#00DEDE'}}>servises</span>>
                </div>
                <div className={s.standardLittle}>&lt;li> <span
                    style={{color: '#F15B63'}}>Computer Graphic</span>  &lt;/li>
                </div>
                <div className={s.standardLittle}>&lt;p> <span style={{color: '#D8DEE9'}}>Modeling, texturing, animation, 3D scanning, </span>
                </div>
                <div className={s.standardLittle} style={{marginLeft: '100px'}}><span className={s.marginAdap}
                                                                                      style={{color: '#D8DEE9'}}>simulation, tech art and integration</span>  &lt;/p>
                </div>
                <br/>
                <div className={s.standardLittle}>
                    &lt;li> <span style={{color: '#F15B63'}}>Development</span> &lt;/li>
                </div>
                <div className={s.standardLittle}>&lt;p> <span style={{color: '#D8DEE9'}}>Web, mobile app and video games, Web GL, Unity,  </span>
                </div>
                <div className={s.standardLittle} style={{marginLeft: '100px'}}><span className={s.marginAdap}
                                                                                      style={{color: '#D8DEE9'}}>Unreal Engine, AR and VR</span> &lt;/p>
                </div>
                <div style={{marginLeft: '30px'}} className={s.standard}>&lt;<span>/servises</span>></div>
                <br/>
                <div style={{marginLeft: '30px'}} className={s.standard}>&lt;<span
                    style={{color: '#00DEDE'}}>contact</span>>
                </div>
                <div className={s.standardLittle}><a href="https://t.me/david_young_tg">&lt;a href=" <span
                    style={{color: '#D8DEE9'}}>https://t.me/david_young_tg</span>"> <span
                    style={{color: '#F15B63'}}>telegram</span> &lt;/a></a></div>
                <div className={s.standardLittle}><a href="https://wa.me/16464174650">&lt;a href="<span
                    style={{color: '#D8DEE9'}}>https://wa.me/16464174650 </span>"> <span
                    style={{color: '#F15B63'}}>whatsapp</span> &lt;/a></a></div>
                <div className={s.standardLittle}><a href="tel:16464174650">&lt;a href=" <span
                    style={{color: '#D8DEE9'}}>+16464174650</span>"> <span
                    style={{color: '#F15B63'}}>phone</span> &lt;/a></a></div>
                <div className={s.standardLittle}><a href="mailto:david.young.info@gmail.com">&lt;a href="<span
                    style={{color: '#D8DEE9'}}>david.young.info@gmail.com</span>"> <span
                    style={{color: '#F15B63'}}>email</span> &lt;/a></a></div>
                <div style={{marginLeft: '30px'}} className={s.standard}>&lt;/contact></div>
                <br/>
                <div className={s.standard}>&lt;/body></div>

                <div className={s.html}><span ref={htmlSecondLet}></span></div>


            </div>

        </div>
    );
}

export default App;
