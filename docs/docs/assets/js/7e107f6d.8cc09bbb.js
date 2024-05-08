"use strict";(self.webpackChunkKT2L=self.webpackChunkKT2L||[]).push([[434],{7034:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var o=t(5893),i=t(1151);const s={sidebar_position:2,title:"Countdown Example Container"},r="Countdown Example Container",a={id:"container-examples-suite/countdown",title:"Countdown Example Container",description:"This example demonstrates how to create a simple countdown timer using a container. If the countdown reaches zero,",source:"@site/docs/container-examples-suite/countdown.md",sourceDirName:"container-examples-suite",slug:"/container-examples-suite/countdown",permalink:"/docs/container-examples-suite/countdown",draft:!1,unlisted:!1,editUrl:"https://github.com/mhus/mhus.de/blob/main/docs/container-examples-suite/countdown.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Countdown Example Container"},sidebar:"tutorialSidebar",previous:{title:"Container Examples Suite",permalink:"/docs/container-examples-suite/overview"},next:{title:"Dice Example Container",permalink:"/docs/container-examples-suite/dice"}},l={},c=[{value:"Environment variables",id:"environment-variables",level:2},{value:"Running with docker",id:"running-with-docker",level:2},{value:"Running with kubernetes",id:"running-with-kubernetes",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"countdown-example-container",children:"Countdown Example Container"}),"\n",(0,o.jsx)(n.p,{children:"This example demonstrates how to create a simple countdown timer using a container. If the countdown reaches zero,\nthe container will output a message and exit. The use case for this container is to demonstrate how to run a container\nfor a specific duration like jobs or cron jobs."}),"\n",(0,o.jsx)(n.h2,{id:"environment-variables",children:"Environment variables"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"SLEEP"}),": The duration between each countdown update in seconds. (default: 1)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"START"}),": The initial value of the countdown. (default: 10)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"MESSAGE"}),': The message to display when the countdown reaches zero. Set to "-" to skip message. (default: "Countdown complete!")']}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"QUIET"}),": If set to ",(0,o.jsx)(n.code,{children:"true"}),", the container will not output the countdown value but the message. (default: false)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"EXIT_CODE"}),": The exit code to return when the countdown reaches zero. (default: 0)'"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"LOG_JSON"}),": If set to ",(0,o.jsx)(n.code,{children:"true"}),", the container will output the countdown value in JSON format. (default: false)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"LOG_COLOR"}),": If set to ",(0,o.jsx)(n.code,{children:"true"}),", the container will output the countdown value in color. Ignored if ",(0,o.jsx)(n.code,{children:"LOG_JSON"})," is set. (default: false)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"TERMINATE_SLEEP"}),": The duration to sleep before terminating the job. (default: 0)"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"running-with-docker",children:"Running with docker"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'docker run --rm -e SLEEP=1 -e START=10 -e MESSAGE="Countdown complete" -e QUIET=false mhus/example-countdown:latest \n'})}),"\n",(0,o.jsx)(n.h2,{id:"running-with-kubernetes",children:"Running with kubernetes"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'kubectl run countdown --image=mhus/example-countdown:latest --env="SLEEP=1" --env="START=10" --env="MESSAGE=Countdown complete" --restart=Never\n'})})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}}}]);