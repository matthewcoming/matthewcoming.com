import React from 'react';
import {Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import 'react-web-tabs/dist/react-web-tabs.css';
import './App.css';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './torusphere.js';

function App() {
  console.log("Please pay no attention to ALLL these eerrrors");
  return (
    <div>
      <header className="App-header">
    <div className="topnav">
		{/*eslint-disable-next-line*/}
    	<a href="https://github.com/matthewcoming/Mattoc" className="fab fa-github"/>
    	<a className="fas fa-file-user" href="https://kipja.com/res/Matthew_Coming.pdf">Resume</a>
		</div>
        <div className="">
          <P5Wrapper sketch={sketch} />
        </div>
        <p> Welcome to Matthew Coming's website!</p>
        <p> He's trying his best</p>
      </header>
        <Tabs defaultTab="About" vertical style={{"align-items": "left"}}>

        	<TabList className="Site-Tab-List">
          	  <Tab tabFor="About">About</Tab>
           		<Tab tabFor="Skills">Skills</Tab>
           		<Tab tabFor="Interests">Interests</Tab>
           		<Tab tabFor="Projects">Projects</Tab>
           		<Tab tabFor="This Site">This Site</Tab>
        	</TabList>

          <TabPanel tabId="About">
          	<ul className="tabul">
           		<li>Enrolled at Texas A&M University.</li>
          		<li>Working as an engineering co-op at L3Harris.</li>
          	</ul>
        	</TabPanel>

        	<TabPanel tabId="Skills">
          	<ul className="tabul">
              <li>C++, Java, JavaScript, LaTeX</li>
              <li>Ubuntu, CentOS</li>
              <li>Vim, Intellij IDEA</li>
              <li>React, p5.js</li>
              <li>Amazon Web Services, Git</li>
            </ul>
        	</TabPanel>

        	<TabPanel tabId="Interests">
          	<ul className="tabul">
              <li><a href="https://www.buildtamu.com/">TAMU Build</a></li>
            </ul>
        	</TabPanel>

        	<TabPanel tabId="Projects">
            <ul className="tabul">
              <li>Spotiflower... in development</li>
              <li>Lots of TAMU C++ Projects... Link soon</li>
            </ul>
        	</TabPanel>

        	<TabPanel tabId="This Site">
            <ul className="tabul">
              <li>Built with React</li>
              <li>Hosted and served with AWS <a href="https://aws.amazon.com/s3/">S3</a>,
              &nbsp;<a href="https://aws.amazon.com/cloudfront/?nc=sn&loc=1">CloudFront</a>
    , and <a href="https://aws.amazon.com/route53/">Route53</a></li>
              <li>Torusphere&trade;&trade;&trade; made in <a href="https://p5js.org/">p5.js</a>, a JavaScript extension of the Processing language</li>
              <li></li>
            </ul>
        	</TabPanel>
    		</Tabs>
    </div>
  );
}

export default App;
