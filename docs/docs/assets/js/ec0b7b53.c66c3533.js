"use strict";(self.webpackChunkKT2L=self.webpackChunkKT2L||[]).push([[5506],{9420:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>o,frontMatter:()=>l,metadata:()=>t,toc:()=>h});var n=r(5893),d=r(1151);const l={sidebar_position:6,title:"Lorem Ipsum"},i="Lorem Ipsum Example Container",t={id:"container-examples-suite/lorem",title:"Lorem Ipsum",description:"This is an example container that generates a lot of text using the Lorem Ipsum generator.",source:"@site/docs/container-examples-suite/lorem.md",sourceDirName:"container-examples-suite",slug:"/container-examples-suite/lorem",permalink:"/docs/container-examples-suite/lorem",draft:!1,unlisted:!1,editUrl:"https://github.com/mhus/mhus.de/blob/main/docs/container-examples-suite/lorem.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Lorem Ipsum"},sidebar:"tutorialSidebar",previous:{title:"Stress",permalink:"/docs/container-examples-suite/stress"},next:{title:"Web",permalink:"/docs/container-examples-suite/web"}},c={},h=[{value:"Environment variables",id:"environment-variables",level:2},{value:"Running with docker",id:"running-with-docker",level:2},{value:"Running with kubernetes",id:"running-with-kubernetes",level:2},{value:"lipsum-shell Usage",id:"lipsum-shell-usage",level:2},{value:"Commands",id:"commands",level:3},{value:"Arguments",id:"arguments",level:3},{value:"Options",id:"options",level:3},{value:"Defaults",id:"defaults",level:4},{value:"lipsum-shell License",id:"lipsum-shell-license",level:2}];function a(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"lorem-ipsum-example-container",children:"Lorem Ipsum Example Container"}),"\n",(0,n.jsx)(s.p,{children:"This is an example container that generates a lot of text using the Lorem Ipsum generator."}),"\n",(0,n.jsx)(s.h2,{id:"environment-variables",children:"Environment variables"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"LOREM"}),': The arguments for lipsum.sh. (default: "paragraphs 10 -m 4 -M 6 -w 8 -W 10")']}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"REPEAT"}),": The number of times to repeat the lorem output. (default: 1)"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"INFINITE"}),": If set to ",(0,n.jsx)(s.code,{children:"true"}),", the dice will roll forever. (default: false)"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"SLEEP"}),": The duration between each roll in seconds. (default: 0.2)"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"QUIET"}),": If set to ",(0,n.jsx)(s.code,{children:"true"}),", the dice will not output the result of each roll. (default: false)"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"LOG_JSON"}),": If set to ",(0,n.jsx)(s.code,{children:"true"}),", the dice will output the result of each roll in JSON format. (default: false)"]}),"\n",(0,n.jsxs)(s.li,{children:["'LOG_COLOR': If set to ",(0,n.jsx)(s.code,{children:"true"}),", the dice will output the result of each roll in color. Ignored if ",(0,n.jsx)(s.code,{children:"LOG_JSON"})," is set. (default: false)"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"TERMINATE_SLEEP"}),": The duration to sleep before terminating the job. (default: 0)"]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["For ",(0,n.jsx)(s.code,{children:"lipsum.sh"})," see ",(0,n.jsx)(s.a,{href:"https://github.com/alexchantastic/lipsum-shell",children:"lipsum-shell"})," or following."]}),"\n",(0,n.jsx)(s.h2,{id:"running-with-docker",children:"Running with docker"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"docker run --rm mhus/example-lorem:latest\n"})}),"\n",(0,n.jsx)(s.h2,{id:"running-with-kubernetes",children:"Running with kubernetes"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"kubectl run dice --image=mhus/example-lorem:latest --restart=Never\n"})}),"\n",(0,n.jsx)(s.h2,{id:"lipsum-shell-usage",children:"lipsum-shell Usage"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sh",children:"lipsum <command> [count] [-m|M|w|W|h|v]\n\n# Generate 10 characters\nlipsum characters 10\n\n# Generate 10 words\nlipsum words 10\n\n# Generate 10 sentences with 8 to 12 words\nlipsum sentences 10 -m 8 -M 12\n\n# Generate 10 paragraphs with 4 to 6 sentences that are 8 to 10 words\nlipsum paragraphs 10 -m 4 -M 6 -w 8 -W 10\n"})}),"\n",(0,n.jsx)(s.h3,{id:"commands",children:"Commands"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Command"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"characters"})}),(0,n.jsx)(s.td,{children:"Generate characters"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"words"})}),(0,n.jsx)(s.td,{children:"Generated words"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"sentences"})}),(0,n.jsx)(s.td,{children:"Generate sentences"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"paragraphs"})}),(0,n.jsx)(s.td,{children:"Generate paragraphs"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"help"})}),(0,n.jsx)(s.td,{children:"Show help"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"version"})}),(0,n.jsx)(s.td,{children:"Show version"})]})]})]}),"\n",(0,n.jsx)(s.p,{children:"Structure commands also have the following aliases:"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Aliases"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Characters"}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"characters"}),", ",(0,n.jsx)(s.code,{children:"character"}),", ",(0,n.jsx)(s.code,{children:"char"}),", ",(0,n.jsx)(s.code,{children:"c"})]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Words"}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"words"}),", ",(0,n.jsx)(s.code,{children:"word"}),", ",(0,n.jsx)(s.code,{children:"w"})]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Sentences"}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"sentences"}),", ",(0,n.jsx)(s.code,{children:"sentence"}),", ",(0,n.jsx)(s.code,{children:"sent"}),", ",(0,n.jsx)(s.code,{children:"s"})]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Paragraphs"}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"paragraphs"}),", ",(0,n.jsx)(s.code,{children:"paragraph"}),", ",(0,n.jsx)(s.code,{children:"para"}),", ",(0,n.jsx)(s.code,{children:"p"})]})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"arguments",children:"Arguments"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Argument"}),(0,n.jsx)(s.th,{children:"Description"}),(0,n.jsx)(s.th,{children:"Default"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"count"})}),(0,n.jsx)(s.td,{children:"Number of structures to generate"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"1"})})]})})]}),"\n",(0,n.jsx)(s.h3,{id:"options",children:"Options"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"-m"})}),(0,n.jsx)(s.td,{children:"Minimum number of structures to generate (applies to sentence and paragraph only)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"-M"})}),(0,n.jsx)(s.td,{children:"Maximum number of structures to generate (applies to sentence and paragraph only)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"-w"})}),(0,n.jsx)(s.td,{children:"Minimum number of words to generate per sentence (applies to paragraph only)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"-W"})}),(0,n.jsx)(s.td,{children:"Maximum number of words to generate per sentence (applies to paragraph only)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"-v"})}),(0,n.jsx)(s.td,{children:"Print version"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"-h"})}),(0,n.jsx)(s.td,{children:"Print help"})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"defaults",children:"Defaults"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Option"}),(0,n.jsx)(s.th,{children:"Value"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Sentences"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"-m"})}),(0,n.jsx)(s.td,{children:"4"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Sentences"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"-M"})}),(0,n.jsx)(s.td,{children:"8"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Paragraphs"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"-m"})}),(0,n.jsx)(s.td,{children:"5"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Paragraphs"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"-M"})}),(0,n.jsx)(s.td,{children:"10"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Paragraphs"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"-w"})}),(0,n.jsx)(s.td,{children:"4"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Paragraphs"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"-W"})}),(0,n.jsx)(s.td,{children:"8"})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"lipsum-shell-license",children:"lipsum-shell License"}),"\n",(0,n.jsxs)(s.p,{children:["Code released under the ",(0,n.jsx)(s.a,{href:"https://github.com/alexchantastic/lipsum-shell/blob/master/LICENSE",children:"MIT License"}),"."]})]})}function o(e={}){const{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}}}]);