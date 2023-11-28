import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "용수",
    lastName: "신",
    position: "웹 개발자",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '🥾',
            text: '등산을 좋아합니다!'
        },
        {
            emoji: '🏠',
            text: '경기도 군포시 거주'
        },
        {
            emoji: "🐣",
            text: "병아리 웹 개발자"
        },
        {
            emoji: "📧",
            text: "shin10075@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/shin10075",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://shin10075.notion.site/shin10075/Web-Developer-11b2e41ed93b44a3ad8ca84e9fb33526",
            icon: "fa fa-user",
            label: 'resume'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bios: ["안녕하십니까.", "신입 웹 개발자가 되고싶은 신용수입니다.", "인생에서 빠지지 말아야 할 것은 ‘공부'와 ‘사랑'이라고 생각합니다.", "방황에 빠진 제 자신을 구해준 것은 다름아닌 프로그래밍이었습니다.", "제 손으로 뭔가를 만들어 본다는 것은 많은 공부가 필요함을 느끼게 했습니다.", "또한 나를 위한 것이 아니라 남을 위해 만든다는 것은 처음으로 제가 받아온 사랑을 보답할 기회라고 생각했습니다.", "저도 도움을 받았기에 도움을 줄 차례라고 생각합니다.", "저의 목표는 누군가를 위해서 공부를 하고 그 누군가가 도움을 받아 더 큰 도움을 다른 누군가에게 주는 ‘호혜의 고리’를 만드는 것입니다.", "목표에 도달하기 위해 최선을 다해 개발을 배워나가고 있습니다.", "감사합니다."],
    skills:
        {
            proficientWith: ['java', 'spring', 'springboot', 'mysql', 'oracle db', 'git', 'github', 'html5', 'css3', 'javascript', 'jsp'],
            exposedTo: ['rds', 'react', 'figma']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'hiking',
            emoji: '🥾'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'painting',
            emoji: '🎨'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Project 1",
            source: "https://github.com/shin10075/fundable", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Project 2",
            source: "https://github.com/shin10075/hellomentor",
            image: mock2
        }
    ]
}