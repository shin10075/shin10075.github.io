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
    position: "풀스텍 개발자",
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
            text: "병아리 풀스택 개발자"
        },
        {
            emoji: "📧",
            text: "shin10075@gmail.com"
        }
    ],
    socials: [
        {
            link: "",
            icon: 'fa fa-sticky-note-o',
            label: 'obsidian'
        },
        {
            link: "https://github.com",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "",
            icon: "fa fa-user",
            label: 'resume'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "안녕하세요. 신입 개발자로서 최선을 다하고 있는 신용수입니다. 감사합니다.",
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
            source: "https://github.com/paytonjewell", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Project 2",
            source: "https://github.com/paytonjewell",
            image: mock2
        }
    ]
}