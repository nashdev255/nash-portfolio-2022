import Image from 'next/image'
import haru_pic from './imgs/haru_free_400x400.jpg'
import twitter_pic from './imgs/twitter_logo.png'
import bili_pic from './imgs/bilibili_logo.png'
import yt_pic from './imgs/youtube_logo.jpg'
import qiita_pic from './imgs/qiita_logo.png'
import hate_pic from './imgs/hatena_logo.png'
import github_pic from './imgs/github_logo.png'

export default function Home() {
    return (
        <>
            <header>
                <div className="header glass">
                    <div className="logstate"></div>
                    <ul className="navigation">
                        <li><a href="#about">ABOUT</a></li>
                        <li><a href="#works">WORKS</a></li>
                        <li className="last-child"><a href="javascript:alert('まだ作ってない(´・ω・｀)')">CONTACT</a></li>
                    </ul>
                </div>
                <div className="headline">
                    <div className="title">
                        <h1 className='text-3xl'>Nash's Portfolio</h1>
                        <p className='text-xl'>here is my developing contents</p>
                    </div>
                </div>
            </header>
            <div id="about" className="introduction">
                <h1 className="who text-3xl py-4">Who are you?</h1>
                <div className="appearance">
                    <Image src={ haru_pic } alt="nash's icon" />
                    <div className="explanation">
                        <h1 className='text-xl'>なっしゅ/nash</h1>
                        <p>
                            鈴鹿高専(NITSC)の情報科2年生<br />
                            趣味 : 開発, 筋トレ<br />
                            特技 : <br />
                            好きな食べ物 : 柚子胡椒<br />
                            好きな言語 : C, NASM
                        </p>
                    </div>
                </div>
                <ul className="timeline">
                    <li>
                        <p className="timeline-date">2021年9月</p>
                        <div className="timeline-content">
                            <h3>BlenderとHTML&CSSに触れる</h3>
                            <p>
                                これまでパソコンで何かをすることはなかったが
                                友人の薦められてBlenderとHTML&CSSに触れる。
                                これが高専への入学を大きく後押しする。
                                受験期だったため触れ始めてから2カ月ほどで一旦やめることになる。
                            </p>
                        </div>
                    </li>
                    <li>
                        <p className="timeline-date">2022年3月</p>
                        <div className="timeline-content">
                            <h3>受験から復帰、自作PCを開発する</h3>
                            <p>
                                Blenderの作品作りに復帰する。
                                同時期に名古屋のパソコンショップ(特に佐古前装備さん)に通い、
                                非実用的ではあるがパソコンを自作する。
                            </p>
                        </div>
                    </li>
                    <li>
                        <p className="timeline-date">2022年4月</p>
                        <div className="timeline-content">
                            <h3>鈴鹿高専に入学する</h3>
                            <p>
                                入学当日、入学前にネットで知り合った人と交流する。
                                それからゴールデンウィークまで毎日演習室でC++を勉強したり、
                                Arduinoで遊んだり、COCET2600の単語帳を回したりする。
                            </p>
                        </div>
                    </li>
                    <li>
                        <p className="timeline-date">2022年9月</p>
                        <div className="timeline-content">
                            <h3>初バイト、Tomisuke配列を使い始める</h3>
                            <p>
                                バイトで稼いでRaspberryPi Model3Bを買ってファイルサーバを
                                構築したり、自作キーボードを作ったりする。この頃に、Tomisuke配列
                                を使い始めてタイピング速度が500kpmに到達する。
                            </p>
                        </div>
                    </li>
                    <li>
                        <p className="timeline-date">2022年10月</p>
                        <div className="timeline-content">
                            <h3>とにかくアニメを観る</h3>
                            <p>
                                テスト前にも関わらず、アニメ配信サービスを契約して
                                次々とアニメをイッキ見する。
                                特に気に入った作品は
                                『魔女の旅々』『無職転生』
                                『ぼっち・ざ・ろっく！』『魔法少女まどかマギカ』など。
                            </p>
                        </div>
                    </li>
                    <li id="last-child-bottom">
                        <p className="timeline-date">2022年12月</p>
                        <div className="timeline-content">
                            <h3>自作OSを始める</h3>
                            <p>
                                書籍『OS自作入門』を読み進めながら自作OSを始める。
                                nasmの記述やメモリ管理など、低レイヤの知識を蓄える。
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="view-contents">
                <h1 className="contents-title text-4xl">SNS</h1>
                <div className="container items-center">
                    <div className="content glass">
                        <Image src={ twitter_pic } alt="twitter-logo" />
                        <div className="inner">
                            <a href="https://twitter.com/nash_4ed9" target="_blank">
                                <h2>Twitter</h2>
                                <p>@nash_4ed9</p>
                            </a>
                        </div>
                    </div>
                    <div className="content glass">
                        <Image src={ yt_pic } alt="youtube-logo" />
                        <div className="inner">
                            <a href="https://www.youtube.com/channel/UCWnqwRNf5TyLCfvTPzvQnLA" target="_blank">
                                <h2>Youtube</h2>
                                <p>@_nash</p>
                            </a>
                        </div>
                    </div>
                    <div className="content glass">
                        <Image src={ bili_pic } alt="bilibili-logo" />
                        <div className="inner">
                            <a href="https://account.bilibili.com/account/home?spm_id_from=333.999.0.0" target="_blank">
                                <h2>Bilibili</h2>
                                <p>@bili_nash(未投稿)</p>
                            </a>
                        </div>
                    </div>
                    <div className="content glass">
                        <Image src={ qiita_pic } alt="qiita-logo" />
                        <div className="inner">
                            <a href="https://qiita.com/nash_4ed9" target="_blank">
                                <h2>Qiita</h2>
                                <p>@nash_4ed9</p>
                            </a>
                        </div>
                    </div>
                    <div className="content glass">
                        <Image src={ hate_pic } alt="hatena-logo" />
                        <div className="inner">
                            <a href="https://blog.hatena.ne.jp/nash_4ed9/nash-4ed9.hatenadiary.com/" target="_blank">
                                <h2>Hatena Blog</h2>
                                <p>@nash_4ed9(閉鎖)</p>
                            </a>
                        </div>
                    </div>
                    <div className="content glass">
                        <Image src={ github_pic } alt="github-logo" />
                        <div className="inner">
                            <a href="https://github.com/nashdev255" target="_blank">
                                <h2>GitHub</h2>
                                <p>@yutori10</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
