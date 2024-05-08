"use strict";(self.webpackChunkKT2L=self.webpackChunkKT2L||[]).push([[83],{9124:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var s=t(5893),i=t(1151);const a={sidebar_position:4,title:"Bash Example Container"},r="Bash Example Container",l={id:"container-examples-suite/bash",title:"Bash Example Container",description:"This example demonstrates how to create a simple container that runs a Bash script. By default the container will",source:"@site/docs/container-examples-suite/bash.md",sourceDirName:"container-examples-suite",slug:"/container-examples-suite/bash",permalink:"/docs/container-examples-suite/bash",draft:!1,unlisted:!1,editUrl:"https://github.com/mhus/mhus.de/blob/main/docs/container-examples-suite/bash.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Bash Example Container"},sidebar:"tutorialSidebar",previous:{title:"Dice Example Container",permalink:"/docs/container-examples-suite/dice"},next:{title:"Stress Example Container",permalink:"/docs/container-examples-suite/stress"}},o={},c=[{value:"Environment variables:",id:"environment-variables",level:2},{value:"Run with other commands",id:"run-with-other-commands",level:2},{value:"Installed packages:",id:"installed-packages",level:2},{value:"Running with docker",id:"running-with-docker",level:2},{value:"Running with kubernetes",id:"running-with-kubernetes",level:2}];function h(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"bash-example-container",children:"Bash Example Container"}),"\n",(0,s.jsx)(n.p,{children:"This example demonstrates how to create a simple container that runs a Bash script. By default the container will\nprint the current time and a message until the container is stopped."}),"\n",(0,s.jsx)(n.h2,{id:"environment-variables",children:"Environment variables:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"SLEEP"}),": The duration to sleep in seconds between the output. (default: 10)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"MESSAGE"}),": Additional message. (default: empty)"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"run-with-other-commands",children:"Run with other commands"}),"\n",(0,s.jsxs)(n.p,{children:["It's possible to overwrite the command and run other commands. For example, to run ",(0,s.jsx)(n.code,{children:"ls -l"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"installed-packages",children:"Installed packages:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"bash coreutils procps util-linux findutils curl wget jq ngrep vim nano tcpdump bind-tools iproute2 iputils"})}),"\n",(0,s.jsx)(n.h2,{id:"running-with-docker",children:"Running with docker"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# infinite loop\ndocker run -it --rm mhus/example-bash:latest \n\n# bash\ndocker run -it --rm mhus/example-bash:latest --\n\n# bash and root user\ndocker run -it --rm --user root mhus/example-bash:latest --\n"})}),"\n",(0,s.jsx)(n.h2,{id:"running-with-kubernetes",children:"Running with kubernetes"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'# Run infinite loop\nkubectl run bash --image=mhus/example-bash:latest --env="SLEEP=10" --restart=Never\n\n# Connect to the container with bash\nkubectl exec -it bash -- /bin/bash\n'})})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}}}]);