"use strict";(self.webpackChunkreact_tailwindcss_portfolio=self.webpackChunkreact_tailwindcss_portfolio||[]).push([[743],{2612:function(e,t,r){r.d(t,{Z:function(){return x}});var a=r(2791),i=r(3313),n=r(6408),s=r(3504),c=r(184),o=function(e){var t=e.id,r=e.title,a=(e.category,e.image),i=e.projectHeader;return(0,c.jsx)(n.E.div,{initial:{opacity:0},animate:{opacity:1,delay:1},transition:{ease:"easeInOut",duration:.7,delay:.15},children:(0,c.jsx)(s.rU,{to:"/projects/".concat(t),"aria-label":"Single Project",children:(0,c.jsxs)("div",{className:"rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark",children:[(0,c.jsx)("div",{children:(0,c.jsx)("img",{src:a,className:"rounded-t-xl border-none",alt:"Single Project"})}),(0,c.jsxs)("div",{className:"text-center px-4 py-6",children:[(0,c.jsx)("p",{className:"font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2",children:r}),(0,c.jsx)("div",{className:"text-lg text-ternary-dark dark:text-ternary-light",children:i.tags.join(" - ")})]})]})})})},l=r(454),d=["Web Application","Desktop Application","Laravel","React","Tailwind","Datatables","Select2","API","MySQL","PostgreSQL","SQLite","TDD","Docker","Documentation"],m=function(e){var t=e.setSelectProject;return(0,c.jsxs)("select",{onChange:function(e){t(e.target.value)},className:"font-general-medium \r px-4\r sm:px-6\r py-2\r border\r dark:border-secondary-dark\r rounded-lg\r text-sm\r sm:text-md\r dark:font-medium\r bg-secondary-light\r dark:bg-ternary-dark\r text-primary-dark\r dark:text-ternary-light\r ",children:[(0,c.jsx)("option",{value:t,className:"text-sm sm:text-md",children:"All Projects"}),d.map((function(e){return(0,c.jsx)("option",{className:"text-normal sm:text-md",children:e},e)}))]})},x=function(){var e=(0,a.useContext)(l.v),t=e.projects,r=e.searchProject,n=e.setSearchProject,s=e.searchProjectsByTitle,d=e.selectProject,x=e.setSelectProject,g=e.selectProjectsByTags;return(0,c.jsxs)("section",{className:"py-5 sm:py-10 mt-5 sm:mt-10",children:[(0,c.jsx)("div",{className:"text-center",children:(0,c.jsx)("p",{className:"font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light",children:"Projects Portfolio"})}),(0,c.jsxs)("div",{className:"mt-10 sm:mt-16",children:[(0,c.jsx)("h3",{className:"font-general-regular \r text-center text-secondary-dark\r dark:text-ternary-light\r text-md\r sm:text-xl\r mb-3\r ",children:"Search projects by title or filter by category"}),(0,c.jsxs)("div",{className:"\r flex\r justify-between\r border-b border-primary-light\r dark:border-secondary-dark\r pb-3\r gap-3\r ",children:[(0,c.jsxs)("div",{className:"flex justify-between gap-2",children:[(0,c.jsx)("span",{className:"\r hidden\r sm:block\r bg-primary-light\r dark:bg-ternary-dark\r p-2.5\r shadow-sm\r rounded-xl\r cursor-pointer\r ",children:(0,c.jsx)(i.jRj,{className:"text-ternary-dark dark:text-ternary-light w-5 h-5"})}),(0,c.jsx)("input",{onChange:function(e){n(e.target.value)},className:"font-general-medium \r pl-3\r pr-1\r sm:px-4\r py-2\r border \r border-gray-200\r dark:border-secondary-dark\r rounded-lg\r text-sm\r sm:text-md\r bg-secondary-light\r dark:bg-ternary-dark\r text-primary-dark\r dark:text-ternary-light\r ",id:"name",name:"name",type:"search",required:"",placeholder:"Search Projects","aria-label":"Name"})]}),(0,c.jsx)(m,{setSelectProject:x})]})]}),(0,c.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10",children:d?g.map((function(e){return(0,c.jsx)(o,{id:e.id,title:e.title,category:e.category,image:e.img,projectHeader:e.ProjectHeader},e.id)})):r?s.map((function(e){return(0,c.jsx)(o,{id:e.id,title:e.title,category:e.category,image:e.img,projectHeader:e.ProjectHeader},e.id)})):t.map((function(e){return(0,c.jsx)(o,{id:e.id,title:e.title,category:e.category,image:e.img,projectHeader:e.ProjectHeader},e.id)}))})]})}},454:function(e,t,r){r.d(t,{v:function(){return m},V:function(){return x}});var a=r(4890),i=r(2791),n=r(1697),s=r(9416),c=(r(6566),r(9958)),o=r(2265),l=(r(5502),[{id:1,title:"Software Engineer at Lexzur",category:"Web Application",img:r(8938),ProjectHeader:{title:"Project Management UI - From Context",publishDate:"Jul 26, 2021",tags:["Laravel","codeigniter","Web Application","MySQL","MSSQL","API","Messenger","Marketplace"]}},{id:2,title:"OXO Guard Management System",category:"Web Application",img:s,ProjectHeader:{title:"Project Management UI - From Context",publishDate:"Jul 26, 2021",tags:["Laravel","Tailwind","Web Application","Datatables","Select2","API","MySQL"]}},{id:3,title:"Customer Onboarding and Verification System",category:"Web Application",img:c,ProjectHeader:{title:"Project Management UI - From Context",publishDate:"Jul 26, 2021",tags:["React","Laravel","API","TDD","PostgreSQL","Docker","Documentation","Tailwind","Web Application"]}},{id:4,title:"Shopping Hive: E-Commerce Sales Insights Retrieval Platform",category:"Web Application",img:o,ProjectHeader:{title:"Project Management UI - From Context",publishDate:"Jul 26, 2021",tags:["React","Laravel","API","TDD","MySQL","Docker","Documentation","Tailwind","Web Application"]}},{id:5,title:"Developing Features in a Desktop App",category:"Desktop Application",img:n,ProjectHeader:{title:"Project Management UI - From Context",publishDate:"Jul 26, 2021",tags:["C#",".NET","SQLite","Desktop Application"]}}]),d=r(184),m=(0,i.createContext)(),x=function(e){var t=(0,i.useState)(l),r=(0,a.Z)(t,2),n=r[0],s=r[1],c=(0,i.useState)(""),o=(0,a.Z)(c,2),x=o[0],g=o[1],p=(0,i.useState)(""),u=(0,a.Z)(p,2),j=u[0],h=u[1],y=n.filter((function(e){return e.title.toLowerCase().includes(x.toLowerCase())||""===x?e:""})),f=n.filter((function(e){return e.ProjectHeader.tags.map((function(e){return(e.charAt(0).toUpperCase()+e.slice(1)).includes(j)})).includes(!0)}));n.filter((function(e){return(e.category.charAt(0).toUpperCase()+e.category.slice(1)).includes(j)}));return(0,d.jsx)(m.Provider,{value:{projects:n,setProjects:s,searchProject:x,setSearchProject:g,searchProjectsByTitle:y,selectProject:j,setSelectProject:h,selectProjectsByTags:f},children:e.children})}},8743:function(e,t,r){r.r(t),r.d(t,{default:function(){return u}});var a=r(3504),i=r(4890),n=r(5558),s=r(3313);r(2791);var c=r.p+"static/media/developer.2f084608158c1db6dcc0b2c76a2806f7.svg";var o=r.p+"static/media/developer-dark.aa2700b57c0b14ead116acc39d478609.svg",l=r(6408),d=r(184),m=function(){var e=(0,n.Z)(),t=(0,i.Z)(e,1)[0];return(0,d.jsxs)(l.E.section,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2",children:[(0,d.jsxs)("div",{className:"w-full md:w-1/3 text-center",children:[(0,d.jsx)(l.E.h1,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.1},className:"font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase",children:(0,d.jsx)("div",{className:"text-center",children:"Hi, I'm Michael"})}),(0,d.jsx)(l.E.p,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"font-general-medium mt-4 md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200",children:(0,d.jsxs)("div",{className:"text-center",children:["Software Engineer ",(0,d.jsx)("br",{})," Laravel | PHP ",(0,d.jsx)("br",{})," API | JavaScript"]})}),(0,d.jsx)(l.E.div,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.3},className:"flex justify-center sm:block",children:(0,d.jsxs)("a",{download:"Michael Ghossain - Software Engineer CV 2024",href:"/files/Michael Ghossain - Software Engineer CV 2024.pdf",className:"font-general-medium flex justify-center mx-auto items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500","aria-label":"Download Resume",children:[(0,d.jsx)(s.UJB,{className:"mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"}),(0,d.jsx)("span",{className:"text-sm sm:text-lg font-general-medium duration-100",children:"Download CV"})]})})]}),(0,d.jsx)(l.E.div,{initial:{opacity:0,y:-180},animate:{opacity:1,y:0},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0",children:(0,d.jsx)("img",{src:"dark"===t?c:o,alt:"Developer"})})]})},x=r(2612),g=r(454),p=r(992),u=function(){return(0,d.jsxs)("div",{className:"container mx-auto",children:[(0,d.jsx)(m,{}),(0,d.jsx)(g.V,{children:(0,d.jsx)(x.Z,{})}),(0,d.jsx)("div",{className:"mt-8 sm:mt-10 flex justify-center",children:(0,d.jsx)(a.rU,{to:"/projects",className:"font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300","aria-label":"More Projects",children:(0,d.jsx)(p.Z,{title:"More Projects"})})})]})}},8938:function(e,t,r){e.exports=r.p+"static/media/Lexzur-Virtual-Backrgound.7203ff6b912343b99218.jpg"},6566:function(e,t,r){e.exports=r.p+"static/media/mobile-project-1.0aa0cb76fed1b95c21d8.jpg"},9958:function(e,t,r){e.exports=r.p+"static/media/mobile-project-2.a5aae7867760d0c29dd2.jpg"},2265:function(e,t,r){e.exports=r.p+"static/media/ui-project-1.41def4d8652deca915b2.jpg"},5502:function(e,t,r){e.exports=r.p+"static/media/ui-project-2.d289191456efd2d47465.jpg"},1697:function(e,t,r){e.exports=r.p+"static/media/web-project-1.dbc2198e771ad7e1d3ea.jpg"},9416:function(e,t,r){e.exports=r.p+"static/media/web-project-2.f01087020cc02a54e124.jpg"}}]);
//# sourceMappingURL=743.3be8052a.chunk.js.map