
// Icons provided by https://icons8.com/ 
// Was going to use Font Awesome ( https://fontawesome.com/ ) for this,
// but they didn't have an icon for Blender 3D.

const FeaturedProjects = [
    {
        title: "Untitled Project (Codename: Bee Hive iOS Z)",
        date: "June 2021",
        discription: "It’s in its very early stages of progress, but I am currently working on building an iOS game. I still have not given it a name yet. It is going to be an isometric (pseudo-3d) style adventure game. I am currently using Blender for the 3D art, SwiftUI for the interface, and SceneKit to drive the graphics. I made a mockup of the interface using Figma. As I moved the design from Figma to Xcode, I am not liking it. I will revisit that later. I am trying not to focus so hard on certain elements, because that makes me lose too much time. I am also building a Node.js server with Socket.IO to drive the backend. Right now, the server only accepts the connections, but soon will put logic on it. I will update this as I progress.",
        bgImage: "https://picsum.photos/1000/1000",
        skills: [
            {
                skillName: "SwiftUI",
                fontAwesome: "fab fa-swift mr-2",
                icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAC/klEQVRoge3ZTcgVVRzH8Y8Z4kIjzbesXKkUKT2mEtZGkAoUEsRFGbQpbN0q2ljkQheSGyOECqpFRJjbCA0KBLHEt6DSCOkpI+F5yhYGQXdanLkxz3Vm7py59z4zxP3Bn8uZO+f8/t85LzNnhrHGGmusHm3GYVzENJIRxTQu4A1sGibA3fhkhImXRQfHsHxQiPWYbAgiGz9hXV2IFWkDTUN04xesrAPS1HAqi49jITa3IOm86GBjXsK3FYDsiSWfJc3BMzEVLmr+6hfF+byEi3rkvhjqCL2PvwdsIze3IpA7BzQr0l3YiqkB2lgcc3Jsd39V8bwOJvAgfq3h042hgVwXrmq3PIlX00T71X0z9diAP5sGSfAKzmbKR/G8MAfK6v2G21OfXW0A+UMYIu9mjj2Fbfo/VG7LeL3TNEgi9Mh8vIC/hCG3Avfjh5J6L2e8luL3pkESvJXWeQjf4wTmYglOFtQ50uO3vw0gCZ5N6y3Eh3g9Lc/FAbcuAu/1+N2bc04jIDfxSKb+XjyRKe8U5lT3/KM5nmfaAJLgmpl33TW4I1NeLez8EhzM8dzXFpAEl5Xv5ubjbbyY81/MUjxykES4yy/s0/6CnGMTbQNJhPG+JMZQGIqtA0lwSdzW9IHZBDmOcxGG18y8i5fpydkEuSmM5afxpWpr/3dYW8FzGX6sCzKnBKRIV7BFePpdJdwjJoShMS+FmxR67lN8XQGiqy04VZJXV/3+/0/9rshp+SvPMPR5Bf/KqtK9Z3HPcHKfob0VvCsrZjLvHjDxNdie/sLjFXwrK3ap/Qw7FL8D6NVSvIRvMm108BoeqwNSZ7KX6Wd8IUzwb/EPbgiLwCph9dqKR9Njeb4f4Lk+PrfkXQQyjUUVEm9CU3KeGoqGwuRocxlIubkVgZwcYSKD6kTMyZvE7dhmKzp4OJb8WAsS742PYiEIG6Q2fei5KjyP1dK6lsBcFd6hDaTlwpeiJuZMRxhOtXsiTxtxSPg+kX3vO+yYSj0OqTGxxxprrP+5/gWKXvTMYZpATAAAAABJRU5ErkJggg=="
            },
            {
                skillName: "Figma",
                fontAwesome: "fab fa-figma mr-2",
                icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABsElEQVRoge2ZS07DMBRFj5gDA9puCxWVZcAaKGVHsAx+C4A19DtNwiCxFHVQv+dXv7ooR4pUqbmyb5M6OjEM/B8mwAL4AnZAc+AIHDpnB3wCz8DYpQEwAzaRiWmL9I81cOdRolZMKqVIA1TANFeJCborYSnSACtgJJnYhbLIA3CpzFi47sY8Ot/of1XLFWloF4Cjsz1BkY1kYtpbq4mfcnREY2qL/CZMxMqP5CRtkdeEiVjJMuaY9mHl9R9ZAjc5ikD7xK0cilTAba4SgSntwypXkaVHicAImAMfxJflQGyZfQeeyHg7DZwDKT6yn3/p5YOPLLrvXEj1kcB9JL/pxsiKxUdCCUm+JmMZq49o82uE2uvtI4/K/BWF+khKvkgfSckX6SMpeVHG20dS8qKMt4+8JWSK9BHt8it+HZSCxUdA/kCtcXjbmOojgRmHr+wKhxKBFB/pM6Z9YR3y2+7znIy308A5YPWRIrD6SBFYfaQIrD6SjdL3R7Jh9ZFisPpINjx8RCRGVjx8RLS/YcXDR06xpxJF6yNZ9zesSH3EZX/DSsxHXPc3rOz7yLC/MdDjD0/lStSZtxkNAAAAAElFTkSuQmCC"
            },
            {
                skillName: "Blender",
                fontAwesome: "fas fa-cube mr-2",
                icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADRUlEQVRoge3YS6hVVRzH8c99pHYtkMq4pGY3B2GTKAisIKLHIGhQGdEkeoq9oBpJNBEnipNeSBZEIVHRpFkQiN0KigKz6EVRUUlpavb0Ztdru8E6F7e3ffZa+5y9zyk4P1ij+399z137///vzUADDTRQDTofb2Ia7+LS/pbTmU7Fz8hy5wge6GdRnWiN4yHyZxtOrDPZcJ3B5igr+dvNeAvLGsxfm8ZxQPv/SoYf/U+em4uxTznMNO7tV4FVtBTvKYfJ8Lyan5smtADPisPsxJlNFfAI9iQUUdfZg0vqBnm8hwD58xfW1gUxhIN9Apk9T2FeHSA/9Rkkw0e4sFuYx/4DIJmw2pRetZEIyCTGMIGTktCb0TCuEep9vakkV/v3ctjkebBugCGsw0xiAb9jK67FcmH4LcTZuFGYM38mxJlRY3sew0uJAH8Lz9qihLin47mEmF9hfrcQy7ErEWIa1+d8l2EzPsEU/sCH2NCCmNUaHI3Evr8biMvEl8D8uS3nuxq/ldgewJU5+4cisXfr8DXkPqENpkJsz/lelOg7hZUtnxF8ELG/ogrAfDxTAWD25K/U9gp+L+b87orYbk6FOAPvdACR4bRWjGEcruD3fS7/yojtZArEqlbQTiBmhPbcLcgpEduvYxC3V0xedBbn4lW5Wi/k/M6N2P7SDmAUTyQkmxLmQ5nN6lzcVUIrjsU9hHNyfndH7PcVQYxhR0Kyb3EB9kbsdsyJfx1+LbHf7/guNCrMmLIcHxeBbE2AeMOxwTWZYH/HnBxLsElYzQ8JA/F9rHesOczq4YT4LxeB7I84bcEJOfv1CYmmcUNRsojWil/dDPcUObfrUIdxZ4H9CvE1ImsVtEXoQDGNC19TYjEzoTMuLQqyocD4B+HbVDu9mpg0E67R08KgPEt4Jhe2fpCbhM+oVTrlK+2KGsFGYeeZEibskhIIwu6VcgXqPkdxXqS2ynqyDyCP1g0BJ+PLHkLsEq5lI5oQ5kvTEN/owRf8FfiuQYhPhSbREy0SdqW6IbYJHa7nukV4g+sW4DOdDdRaNQ+3CutIVYCdwmxJfpUdipvUoglchcuFjxfjws42KrzH78bneBuv4Yse1TXQQAMN1Cf9A9LzhjTs0FDQAAAAAElFTkSuQmCC"
            },
            {
                skillName: "SceneKit",
                fontAwesome: "fab fa-swift mr-2",
                icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAC/klEQVRoge3ZTcgVVRzH8Y8Z4kIjzbesXKkUKT2mEtZGkAoUEsRFGbQpbN0q2ljkQheSGyOECqpFRJjbCA0KBLHEt6DSCOkpI+F5yhYGQXdanLkxz3Vm7py59z4zxP3Bn8uZO+f8/t85LzNnhrHGGmusHm3GYVzENJIRxTQu4A1sGibA3fhkhImXRQfHsHxQiPWYbAgiGz9hXV2IFWkDTUN04xesrAPS1HAqi49jITa3IOm86GBjXsK3FYDsiSWfJc3BMzEVLmr+6hfF+byEi3rkvhjqCL2PvwdsIze3IpA7BzQr0l3YiqkB2lgcc3Jsd39V8bwOJvAgfq3h042hgVwXrmq3PIlX00T71X0z9diAP5sGSfAKzmbKR/G8MAfK6v2G21OfXW0A+UMYIu9mjj2Fbfo/VG7LeL3TNEgi9Mh8vIC/hCG3Avfjh5J6L2e8luL3pkESvJXWeQjf4wTmYglOFtQ50uO3vw0gCZ5N6y3Eh3g9Lc/FAbcuAu/1+N2bc04jIDfxSKb+XjyRKe8U5lT3/KM5nmfaAJLgmpl33TW4I1NeLez8EhzM8dzXFpAEl5Xv5ubjbbyY81/MUjxykES4yy/s0/6CnGMTbQNJhPG+JMZQGIqtA0lwSdzW9IHZBDmOcxGG18y8i5fpydkEuSmM5afxpWpr/3dYW8FzGX6sCzKnBKRIV7BFePpdJdwjJoShMS+FmxR67lN8XQGiqy04VZJXV/3+/0/9rshp+SvPMPR5Bf/KqtK9Z3HPcHKfob0VvCsrZjLvHjDxNdie/sLjFXwrK3ap/Qw7FL8D6NVSvIRvMm108BoeqwNSZ7KX6Wd8IUzwb/EPbgiLwCph9dqKR9Njeb4f4Lk+PrfkXQQyjUUVEm9CU3KeGoqGwuRocxlIubkVgZwcYSKD6kTMyZvE7dhmKzp4OJb8WAsS742PYiEIG6Q2fei5KjyP1dK6lsBcFd6hDaTlwpeiJuZMRxhOtXsiTxtxSPg+kX3vO+yYSj0OqTGxxxprrP+5/gWKXvTMYZpATAAAAABJRU5ErkJggg=="
            },
            {
                skillName: "Node.js",
                fontAwesome: "fab fa-node mr-2",
                icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAADp0lEQVRoge2WXWhTZxjH/8/5SvwoTW0togwKI2wgA1kwKShS6eAIIknHBk6YKDLHLiobiGyyMYfgpILuwrvNixW0srLZhLEmdWPuYpAEKl4M3GhhY8OLdP2yTUhPTs55dtEmPTk9cUlBVHx/d8/7/J/z/J837zl5AYFAIBAIBILnF/lJGwCAiB69vyP40tSDyT/uN1srPQ5D6+BlYvqmW4/ebrbwaRkAAMBAb7M1T9UA60EM8KR55gdQnMGunljA77M/YtAJAl9bMqTP790Zma9X3HOjp0Mp+28pPnnP7J8zv1qK2Td+enz6UQ3dPUzLdwEoNax3eyIACIVOqkr71HEQnwfQ6aifJWCgTSp9MTo6alSNn+tRlC7/gLZZ7ZdkWQGA/EwBc3/PWaTSUNDqOjF8brjGVSh0UlW35t5jxicAOhypaWecScWb8kQR/VAUkC8BHKy/bzRBZJ9OJxOJ3kH9jOrTPlM02V8jYSA3kYORN0CStCSr0qd3P84OAEBjPVYHaMaTBEjfuoQZZj4GIONwF2Sm7wBA9WsX15gHAALaXmgDCGDb9ltl6+Jq0tWDkWbmY2Ckvc2t9UREx708KXBcJ5joSDY5chMAAxgMH4gdJuYbK2kZAAozeWrd1urZVtugoaWjBYv/LkLboJEjVdsjVbeHt37V09dhPfoWAdcrupqvUDY5MrQiBABeiWswiyZKhfovXWB7ANpGDbLqfc1qpIdbH76yb3/35b1/ha/s259NxVeHZfywrs/o7IM5sMWeOZIJgR2B9Ty2GSYBeiMzFj+o/L+2Frtso1QwsJBbQOt276Pkb/HDyBueubAePZJNxSu/AoUPxA6DvTejqv8gPgSgq7KWScWr70fTA5QKJYCBhakFbGzfBNXn/YhNWzY7Qwsr55qA6xE9eoqJviTmd8AccenW6Lv12PsgnEknR+64+ziPUKKO55p1ySddlYgsthnz/8x5Fthl27LM8tVKTMSvAzThkESI+SsADvM0saxbq2fwbmb+OaJHv9+tH9rpHuB3wI5lUvGol5nldTu2rAPuns32m9JSQFGVW8XFIhfni1Ut2wwjb/xiPTQ6b7892l9ZTycTifJ0504wvQsg52oxS8CHWyTjlXQykXDqiekUlv/oKhyUIP0U7u1rr47tuYUNsut8JOjTpJsdL2591VwyJ2FbfWNHx357VE3otTdbVdk4y6CjBB40Ld+F8R+HHzagb+h6IxAIBAKBQCAQCATPDP8BaEOaEZ1yEaIAAAAASUVORK5CYII="
            },
            {
                skillName: "Socket.IO",
                fontAwesome: "fab fa-js",
                icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACGklEQVRoge3aO2sUURiH8V8uawpZFYmxUPECtiLiB9BCELHy0mijKESsbARBqzRaidhoIWmsjCmMCLaCjTYWfoOgKEaFSNYU3tZiBrI5mc1O3J3dWTkPnGLP7PvO/9nZc5hllkgksla2YBo11Es2amm20Twi0yUI3GpMhaEHMkRqWJ/HuIfUUG2cyBKpdydL2yzLPtirFJ0mipSNKFI2okjZiCJlI4qUjShSNqJI2ShaZCAYWTzBMYyhgm04jpl2T97Jn6Sr9f6N8y2yXEjfl6d3z0Ru5wmDm2UW+YMdwbFLeIgrGErntuNZmUU+BfOHg7r7uIxveXsP5zErgF/B6zDYeCdO0o0r8hMbgmM3sNhG756I1CU7UshWTOBLP4nMYU+TDFVcw3w/iNTxWbLQm7EXb/tBpC7ZimdwoEmezZjtB5HG8QJHMurGeykSbrFr6T0R1O3qhsiiZOu8F8zPBn1HguNzOI3HGT3ng9p1RYs8xe60bhi30oBfcS7ou7OhbkryQAk24U3Q92VQO1a0yIk8DVPONtSdDI6N4CLu4qpkgTdyqmiRD5auyGoM4nVD3UcrbxqbUbHyihWyRt5jfwuJOxl177CvRZaq7DVUiEgdP/AAhyTf+YrkEz+DVy3qJnFUcnsyhI04iOuSD6lZ7TL+60dv37sUpB1q4USWyPMuBGmXXBlHJQtswb+tlyLHAh7J+YeBSCSyxF9i/HQZMS7yWgAAAABJRU5ErkJggg=="
            }
            
        ]
    }
];

export default FeaturedProjects;