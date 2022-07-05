import React from 'react'
import { useTranslation } from "react-i18next"
import "../stylesheets/ProblemSolving.css";

const options = {
	cMapUrl: 'cmaps/',
	cMapPacked: true,
	standardFontDataUrl: 'standard_fonts/',
  };
  

function ProblemSolving() {
	const { t } = useTranslation()
  
	return (
	<article className='letter'>
		{t('too-lazy')}
		<br/>
		
		<style
			type="text/css"
			dangerouslySetInnerHTML={{
			__html:
				'.lst-kix_3xshkb1218xa-6>li{counter-increment:lst-ctn-kix_3xshkb1218xa-6}ol.lst-kix_3xshkb1218xa-6.start{counter-reset:lst-ctn-kix_3xshkb1218xa-6 0}.lst-kix_8wj4xdt3s1kr-8>li{counter-increment:lst-ctn-kix_8wj4xdt3s1kr-8}.lst-kix_vhy35jgmv82o-8>li:before{content:"\\0025a0  "}.lst-kix_bk7tky9xq8ng-0>li:before{content:"\\0025cf  "}.lst-kix_bk7tky9xq8ng-2>li:before{content:"\\0025a0  "}.lst-kix_vhy35jgmv82o-7>li:before{content:"\\0025cb  "}.lst-kix_bk7tky9xq8ng-1>li:before{content:"\\0025cb  "}.lst-kix_vhy35jgmv82o-5>li:before{content:"\\0025a0  "}.lst-kix_vhy35jgmv82o-4>li:before{content:"\\0025cb  "}.lst-kix_vhy35jgmv82o-6>li:before{content:"\\0025cf  "}.lst-kix_bk7tky9xq8ng-4>li:before{content:"\\0025cb  "}.lst-kix_bk7tky9xq8ng-6>li:before{content:"\\0025cf  "}.lst-kix_bk7tky9xq8ng-3>li:before{content:"\\0025cf  "}.lst-kix_bk7tky9xq8ng-7>li:before{content:"\\0025cb  "}.lst-kix_3xshkb1218xa-7>li{counter-increment:lst-ctn-kix_3xshkb1218xa-7}.lst-kix_vhy35jgmv82o-2>li:before{content:"\\0025a0  "}.lst-kix_vhy35jgmv82o-3>li:before{content:"\\0025cf  "}.lst-kix_bk7tky9xq8ng-5>li:before{content:"\\0025a0  "}.lst-kix_ad4vgrechug9-1>li:before{content:"\\0025cb  "}.lst-kix_8wj4xdt3s1kr-7>li{counter-increment:lst-ctn-kix_8wj4xdt3s1kr-7}ol.lst-kix_8wj4xdt3s1kr-8{list-style-type:none}.lst-kix_ad4vgrechug9-0>li:before{content:"\\0025cf  "}ol.lst-kix_8wj4xdt3s1kr-6{list-style-type:none}ol.lst-kix_8wj4xdt3s1kr-7.start{counter-reset:lst-ctn-kix_8wj4xdt3s1kr-7 0}ol.lst-kix_8wj4xdt3s1kr-7{list-style-type:none}ol.lst-kix_8wj4xdt3s1kr-4{list-style-type:none}.lst-kix_vhy35jgmv82o-1>li:before{content:"\\0025cb  "}ol.lst-kix_8wj4xdt3s1kr-5{list-style-type:none}ol.lst-kix_8wj4xdt3s1kr-2{list-style-type:none}.lst-kix_vhy35jgmv82o-0>li:before{content:"\\0025cf  "}ol.lst-kix_8wj4xdt3s1kr-3{list-style-type:none}.lst-kix_bk7tky9xq8ng-8>li:before{content:"\\0025a0  "}ol.lst-kix_8wj4xdt3s1kr-0{list-style-type:none}ol.lst-kix_8wj4xdt3s1kr-1{list-style-type:none}ol.lst-kix_8wj4xdt3s1kr-4.start{counter-reset:lst-ctn-kix_8wj4xdt3s1kr-4 0}ol.lst-kix_3xshkb1218xa-0.start{counter-reset:lst-ctn-kix_3xshkb1218xa-0 0}ol.lst-kix_3xshkb1218xa-3.start{counter-reset:lst-ctn-kix_3xshkb1218xa-3 0}ol.lst-kix_3xshkb1218xa-4.start{counter-reset:lst-ctn-kix_3xshkb1218xa-4 0}ol.lst-kix_8wj4xdt3s1kr-1.start{counter-reset:lst-ctn-kix_8wj4xdt3s1kr-1 0}.lst-kix_8wj4xdt3s1kr-5>li{counter-increment:lst-ctn-kix_8wj4xdt3s1kr-5}ul.lst-kix_vdsa1c4pdmky-2{list-style-type:none}ul.lst-kix_vdsa1c4pdmky-3{list-style-type:none}.lst-kix_3xshkb1218xa-8>li{counter-increment:lst-ctn-kix_3xshkb1218xa-8}ul.lst-kix_vdsa1c4pdmky-0{list-style-type:none}ul.lst-kix_vdsa1c4pdmky-1{list-style-type:none}ul.lst-kix_vdsa1c4pdmky-6{list-style-type:none}ul.lst-kix_vdsa1c4pdmky-7{list-style-type:none}ul.lst-kix_vdsa1c4pdmky-4{list-style-type:none}ul.lst-kix_vdsa1c4pdmky-5{list-style-type:none}ul.lst-kix_vdsa1c4pdmky-8{list-style-type:none}.lst-kix_ad4vgrechug9-2>li:before{content:"\\0025a0  "}ol.lst-kix_8wj4xdt3s1kr-8.start{counter-reset:lst-ctn-kix_8wj4xdt3s1kr-8 0}ol.lst-kix_3xshkb1218xa-5.start{counter-reset:lst-ctn-kix_3xshkb1218xa-5 0}ol.lst-kix_8wj4xdt3s1kr-2.start{counter-reset:lst-ctn-kix_8wj4xdt3s1kr-2 0}.lst-kix_ad4vgrechug9-3>li:before{content:"\\0025cf  "}.lst-kix_ad4vgrechug9-4>li:before{content:"\\0025cb  "}.lst-kix_ad4vgrechug9-5>li:before{content:"\\0025a0  "}.lst-kix_ad4vgrechug9-6>li:before{content:"\\0025cf  "}.lst-kix_3xshkb1218xa-5>li{counter-increment:lst-ctn-kix_3xshkb1218xa-5}.lst-kix_ad4vgrechug9-8>li:before{content:"\\0025a0  "}.lst-kix_ad4vgrechug9-7>li:before{content:"\\0025cb  "}.lst-kix_3xshkb1218xa-2>li{counter-increment:lst-ctn-kix_3xshkb1218xa-2}.lst-kix_vdsa1c4pdmky-7>li:before{content:"\\0025cb  "}.lst-kix_vdsa1c4pdmky-8>li:before{content:"\\0025a0  "}.lst-kix_3xshkb1218xa-0>li{counter-increment:lst-ctn-kix_3xshkb1218xa-0}.lst-kix_vdsa1c4pdmky-2>li:before{content:"\\0025a0  "}.lst-kix_8wj4xdt3s1kr-3>li:before{content:"(" counter(lst-ctn-kix_8wj4xdt3s1kr-3,decimal) ") "}.lst-kix_vdsa1c4pdmky-1>li:before{content:"\\0025cb  "}.lst-kix_vdsa1c4pdmky-3>li:before{content:"\\0025cf  "}.lst-kix_8wj4xdt3s1kr-2>li:before{content:"" counter(lst-ctn-kix_8wj4xdt3s1kr-2,lower-roman) ") "}.lst-kix_8wj4xdt3s1kr-4>li:before{content:"(" counter(lst-ctn-kix_8wj4xdt3s1kr-4,lower-latin) ") "}.lst-kix_vdsa1c4pdmky-6>li:before{content:"\\0025cf  "}ol.lst-kix_8wj4xdt3s1kr-6.start{counter-reset:lst-ctn-kix_8wj4xdt3s1kr-6 0}.lst-kix_8wj4xdt3s1kr-7>li:before{content:"" counter(lst-ctn-kix_8wj4xdt3s1kr-7,lower-latin) ". "}.lst-kix_vdsa1c4pdmky-5>li:before{content:"\\0025a0  "}.lst-kix_8wj4xdt3s1kr-8>li:before{content:"" counter(lst-ctn-kix_8wj4xdt3s1kr-8,lower-roman) ". "}.lst-kix_8wj4xdt3s1kr-0>li:before{content:"" counter(lst-ctn-kix_8wj4xdt3s1kr-0,decimal) ") "}.lst-kix_vdsa1c4pdmky-4>li:before{content:"\\0025cb  "}.lst-kix_8wj4xdt3s1kr-2>li{counter-increment:lst-ctn-kix_8wj4xdt3s1kr-2}.lst-kix_8wj4xdt3s1kr-1>li:before{content:"" counter(lst-ctn-kix_8wj4xdt3s1kr-1,lower-latin) ") "}ol.lst-kix_3xshkb1218xa-4{list-style-type:none}ol.lst-kix_3xshkb1218xa-3{list-style-type:none}ol.lst-kix_3xshkb1218xa-2{list-style-type:none}ol.lst-kix_3xshkb1218xa-1{list-style-type:none}ol.lst-kix_3xshkb1218xa-0{list-style-type:none}ol.lst-kix_3xshkb1218xa-2.start{counter-reset:lst-ctn-kix_3xshkb1218xa-2 0}.lst-kix_8wj4xdt3s1kr-3>li{counter-increment:lst-ctn-kix_8wj4xdt3s1kr-3}ol.lst-kix_8wj4xdt3s1kr-0.start{counter-reset:lst-ctn-kix_8wj4xdt3s1kr-0 0}.lst-kix_8wj4xdt3s1kr-6>li:before{content:"" counter(lst-ctn-kix_8wj4xdt3s1kr-6,decimal) ". "}ol.lst-kix_8wj4xdt3s1kr-3.start{counter-reset:lst-ctn-kix_8wj4xdt3s1kr-3 0}.lst-kix_vdsa1c4pdmky-0>li:before{content:"\\0025cf  "}.lst-kix_8wj4xdt3s1kr-5>li:before{content:"(" counter(lst-ctn-kix_8wj4xdt3s1kr-5,lower-roman) ") "}.lst-kix_3xshkb1218xa-1>li{counter-increment:lst-ctn-kix_3xshkb1218xa-1}.lst-kix_8wj4xdt3s1kr-1>li{counter-increment:lst-ctn-kix_8wj4xdt3s1kr-1}.lst-kix_8wj4xdt3s1kr-4>li{counter-increment:lst-ctn-kix_8wj4xdt3s1kr-4}ul.lst-kix_ad4vgrechug9-8{list-style-type:none}ul.lst-kix_ad4vgrechug9-6{list-style-type:none}ul.lst-kix_ad4vgrechug9-7{list-style-type:none}ul.lst-kix_ad4vgrechug9-4{list-style-type:none}ul.lst-kix_ad4vgrechug9-5{list-style-type:none}ol.lst-kix_3xshkb1218xa-8{list-style-type:none}ol.lst-kix_3xshkb1218xa-7{list-style-type:none}ol.lst-kix_3xshkb1218xa-6{list-style-type:none}ol.lst-kix_3xshkb1218xa-5{list-style-type:none}ul.lst-kix_ad4vgrechug9-2{list-style-type:none}ul.lst-kix_ad4vgrechug9-3{list-style-type:none}ul.lst-kix_ad4vgrechug9-0{list-style-type:none}ul.lst-kix_ad4vgrechug9-1{list-style-type:none}.lst-kix_3xshkb1218xa-3>li{counter-increment:lst-ctn-kix_3xshkb1218xa-3}.lst-kix_8wj4xdt3s1kr-0>li{counter-increment:lst-ctn-kix_8wj4xdt3s1kr-0}ol.lst-kix_3xshkb1218xa-1.start{counter-reset:lst-ctn-kix_3xshkb1218xa-1 0}.lst-kix_3xshkb1218xa-7>li:before{content:"" counter(lst-ctn-kix_3xshkb1218xa-7,lower-latin) ". "}.lst-kix_3xshkb1218xa-8>li:before{content:"" counter(lst-ctn-kix_3xshkb1218xa-8,lower-roman) ". "}ol.lst-kix_3xshkb1218xa-7.start{counter-reset:lst-ctn-kix_3xshkb1218xa-7 0}ul.lst-kix_bk7tky9xq8ng-6{list-style-type:none}.lst-kix_3xshkb1218xa-5>li:before{content:"(" counter(lst-ctn-kix_3xshkb1218xa-5,lower-roman) ") "}ol.lst-kix_8wj4xdt3s1kr-5.start{counter-reset:lst-ctn-kix_8wj4xdt3s1kr-5 0}ul.lst-kix_bk7tky9xq8ng-7{list-style-type:none}ul.lst-kix_vhy35jgmv82o-0{list-style-type:none}ul.lst-kix_bk7tky9xq8ng-8{list-style-type:none}ul.lst-kix_vhy35jgmv82o-1{list-style-type:none}ul.lst-kix_vhy35jgmv82o-2{list-style-type:none}ul.lst-kix_bk7tky9xq8ng-2{list-style-type:none}ul.lst-kix_vhy35jgmv82o-3{list-style-type:none}.lst-kix_3xshkb1218xa-4>li{counter-increment:lst-ctn-kix_3xshkb1218xa-4}ul.lst-kix_bk7tky9xq8ng-3{list-style-type:none}ul.lst-kix_vhy35jgmv82o-4{list-style-type:none}ul.lst-kix_bk7tky9xq8ng-4{list-style-type:none}ul.lst-kix_vhy35jgmv82o-5{list-style-type:none}ul.lst-kix_bk7tky9xq8ng-5{list-style-type:none}ul.lst-kix_vhy35jgmv82o-6{list-style-type:none}.lst-kix_8wj4xdt3s1kr-6>li{counter-increment:lst-ctn-kix_8wj4xdt3s1kr-6}ul.lst-kix_vhy35jgmv82o-7{list-style-type:none}.lst-kix_3xshkb1218xa-6>li:before{content:"" counter(lst-ctn-kix_3xshkb1218xa-6,decimal) ". "}ul.lst-kix_vhy35jgmv82o-8{list-style-type:none}ul.lst-kix_bk7tky9xq8ng-0{list-style-type:none}ul.lst-kix_bk7tky9xq8ng-1{list-style-type:none}.lst-kix_3xshkb1218xa-0>li:before{content:"" counter(lst-ctn-kix_3xshkb1218xa-0,decimal) ") "}.lst-kix_3xshkb1218xa-1>li:before{content:"" counter(lst-ctn-kix_3xshkb1218xa-1,lower-latin) ") "}.lst-kix_3xshkb1218xa-4>li:before{content:"(" counter(lst-ctn-kix_3xshkb1218xa-4,lower-latin) ") "}.lst-kix_3xshkb1218xa-2>li:before{content:"" counter(lst-ctn-kix_3xshkb1218xa-2,lower-roman) ") "}li.li-bullet-0:before{margin-left:-18pt;white-space:nowrap;display:inline-block;min-width:18pt}.lst-kix_3xshkb1218xa-3>li:before{content:"(" counter(lst-ctn-kix_3xshkb1218xa-3,decimal) ") "}ol.lst-kix_3xshkb1218xa-8.start{counter-reset:lst-ctn-kix_3xshkb1218xa-8 0}ol{margin:0;padding:0}table td,table th{padding:0}.c1{color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:12pt;font-family:"Arial";font-style:italic}.c12{color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:24pt;font-family:"Arial";font-style:normal}.c3{color:#000000;font-weight:700;text-decoration:none;vertical-align:baseline;font-size:11pt;font-family:"Arial";font-style:normal}.c0{color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:12pt;font-family:"Arial";font-style:normal}.c11{color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:18pt;font-family:"Arial";font-style:normal}.c10{color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:11pt;font-family:"Arial";font-style:normal}.c2{padding-top:0pt;padding-bottom:0pt;line-height:1.15;orphans:2;widows:2;text-align:left}.c14{background-color:#ffffff;max-width:468pt;padding:72pt 72pt 72pt 72pt}.c8{margin-left:36pt;padding-left:0pt}.c4{font-size:12pt;font-style:italic}.c5{padding:0;margin:0}.c13{font-size:18pt}.c7{font-size:12pt}.c6{height:11pt}.c9{font-weight:700}.title{padding-top:0pt;color:#000000;font-size:26pt;padding-bottom:3pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}.subtitle{padding-top:0pt;color:#666666;font-size:15pt;padding-bottom:16pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}li{color:#000000;font-size:11pt;font-family:"Arial"}p{margin:0;color:#000000;font-size:11pt;font-family:"Arial"}h1{padding-top:20pt;color:#000000;font-size:20pt;padding-bottom:6pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h2{padding-top:18pt;color:#000000;font-size:16pt;padding-bottom:6pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h3{padding-top:16pt;color:#434343;font-size:14pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h4{padding-top:14pt;color:#666666;font-size:12pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h5{padding-top:12pt;color:#666666;font-size:11pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h6{padding-top:12pt;color:#666666;font-size:11pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;font-style:italic;orphans:2;widows:2;text-align:left}'
			}}
		/>
		<p className="c2">
			<span className="c12">On the subject of problem solving</span>
		</p>
		<p className="c2 c6">
			<span className="c10" />
		</p>
		<p className="c2 c6">
			<span className="c10" />
		</p>
		<p className="c2">
			<span className="c7">General algorithm of problem solving:</span>
			<br />
			<span className="c10">
			<br />
			</span>
		</p>
		<p className="c2">
			<span className="c3">
			{"{"}Input{"}"} =&gt; f(ideas, actions, time) =&gt; {"{"}Output{"}"}
			</span>
		</p>
		<p className="c2">
			<span className="c3">
			<br />
			Which can be translated to
			<br />
			<br />
			</span>
		</p>
		<p className="c2">
			<span className="c3">
			{"{"}Problem/desire{"}"} =&gt; f(ideas, actions, time) =&gt; {"{"}Best
			solution/Objective{"}"}
			</span>
		</p>
		<p className="c2 c6">
			<span className="c10" />
		</p>
		<p className="c2">
			<span>* We will define f(</span>
			<span className="c9">ideas, actions, time</span>
			<span className="c10">) further in this paper.</span>
		</p>
		<p className="c2 c6">
			<span className="c10" />
		</p>
		<p className="c2">
			<span className="c11">I) Defining the idea of “problem”</span>
		</p>
		<p className="c2 c6">
			<span className="c10" />
		</p>
		<p className="c2">
			<span className="c0">
			A problem is a matter or situation regarded as unwelcome or harmful and
			needing to be dealt with and overcome. (as defined by the oxford
			dictionary)
			</span>
		</p>
		<p className="c2 c6">
			<span className="c0" />
		</p>
		<p className="c2">
			<span className="c0">
			The idea of a problem can also be interchanged with an individual or a
			group's desire to reach an objective.{" "}
			</span>
		</p>
		<p className="c2 c6">
			<span className="c0" />
		</p>
		<p className="c2">
			<span className="c0">
			Something exists in a given state at a given moment which is subject to
			continuous change over time. This means that our model above can also be
			translated to:
			</span>
		</p>
		<p className="c2 c6">
			<span className="c10" />
		</p>
		<p className="c2">
			<span className="c3">
			{"{"}State at T1{"}"} =&gt; f(ideas, actions, time) =&gt; {"{"}State at T2
			{"}"}
			</span>
		</p>
		<p className="c2 c6">
			<span className="c10" />
		</p>
		<p className="c2">
			<span className="c10">
			* T1 and T2 - are the moments in time when the state is being observed
			</span>
		</p>
		<p className="c2 c6">
			<span className="c10" />
		</p>
		<p className="c2">
			<span className="c11">II) What are the general inputs for a state?</span>
		</p>
		<p className="c2 c6">
			<span className="c11" />
		</p>
		<ol className="c5 lst-kix_8wj4xdt3s1kr-0 start" start={1}>
			<li className="c2 c8 li-bullet-0">
			<span className="c0">
				Ideas - which have a few important properties if observed or questioned:
				<br />* They can change - if addressed in a particular way
				<br />* They can stay the same intentionally - if the approach is
				misguided
				<br />* They can stay the same by being ignored - if the approach is not
				engaging
				<br />
			</span>
			</li>
			<li className="c2 c8 li-bullet-0">
			<span className="c0">
				Actions - an application of a set of ideas
				<br />* They can be in motion/underway with the target of changing
				something
				<br />* They can be in continuous motion with the purpose of maintaining a
				balance
				<br />* The are not implemented
				<br />
			</span>
			</li>
			<li className="c2 c8 li-bullet-0">
			<span className="c0">The satisfaction level of the individual</span>
			</li>
		</ol>
		<p className="c2">
			<span className="c1">
			If everyone or most people agree with you, there are no human barriers
			when you are trying to implement a change.
			</span>
		</p>
		<p className="c2 c6">
			<span className="c1" />
		</p>
		<p className="c2">
			<span className="c11">III) What constitutes a solution (the output)?</span>
		</p>
		<p className="c2 c6">
			<span className="c11" />
		</p>
		<p className="c2">
			<span className="c0">
			The contentment/satisfaction of the individual trying to solve a problem
			by changing the state of matters after the actions implemented have
			concluded.
			</span>
		</p>
		<p className="c2 c6">
			<span className="c0" />
		</p>
		<p className="c2">
			<span className="c13">IV) What is the function f(</span>
			<span className="c9">ideas, actions, time</span>
			<span className="c11">)?</span>
		</p>
		<p className="c2 c6">
			<span className="c11" />
		</p>
		<p className="c2">
			<span className="c7">
			In short, the algorithm of solving a problem, denoted with{" "}
			</span>
			<span className="c4">f(ideas, actions, time)</span>
			<span className="c0">
			&nbsp;in this paper, represents a combination of ideas and a set of
			actions that can be taken to obtain an expected result that will maximise
			the contentment/satisfaction level of the one implementing the ideas
			whilst maintaining or preferably growing the contentment/satisfaction
			level of the other implicated entities (individuals, or groups of
			individuals) as well.
			</span>
		</p>
		<p className="c2 c6">
			<span className="c0" />
		</p>
		<p className="c2">
			<span className="c1">
			How do we achieve this balance?
			<br />
			</span>
		</p>
		<p className="c2">
			<span className="c7">
			If the ideas of the one desiring something conflicts with the
			contentment/satisfaction of the neighbouring (at a global scale)
			individuals, it will hinder the result. However, if the neighbouring
			individuals (which also constitute other entities, like companies or
			governments) can be convinced by your ideas, actions can be implemented to
			achieve the set goal without
			</span>
			<span className="c7">&nbsp;</span>
			<span className="c0">
			resistance, or even with extra help, hence bringing the one desiring some
			change closer to contentment/satisfaction.
			</span>
		</p>
		<p className="c2 c6">
			<span className="c0" />
		</p>
		<p className="c2">
			<span className="c0">
			The actions to be implemented at this step should not affect (or create
			the impression that it will affect) the satisfaction of the other
			individuals/entities implicated/impacted by said actions.
			</span>
		</p>
		<p className="c2 c6">
			<span className="c0" />
		</p>
		<p className="c2">
			<span className="c11">V) The ideas</span>
		</p>
		<p className="c2 c6">
			<span className="c11" />
		</p>
		<p className="c2">
			<span className="c0">
			The ideas are not constrained by laws, morality or any other human
			concept.
			</span>
		</p>
		<p className="c2">
			<span className="c4">Any </span>
			<span className="c0">
			idea can be set in motion in such a way that the balance is maintained.
			</span>
		</p>
		<p className="c2 c6">
			<span className="c0" />
		</p>
		<p className="c2">
			<span className="c7">The key concept that humanity has in </span>
			<span className="c7">its</span>
			<span className="c7">&nbsp;toolbelt is </span>
			<span className="c7 c9">perspective.</span>
		</p>
		<p className="c2 c6">
			<span className="c0" />
		</p>
		<p className="c2">
			<span className="c7 c9">Perspective </span>
			<span className="c0">
			sits at the core of the ideas and the set of actions that can be set in
			motion to achieve anything.
			</span>
		</p>
		<p className="c2">
			<span className="c0">
			For every problem/desire there exists a perspective which can be harnessed
			to achieve a solution.
			</span>
		</p>
		<p className="c2 c6">
			<span className="c0" />
		</p>
		<p className="c2">
			<span className="c0">
			A common trap is to limit the perspective to a narrow set of concepts
			close to the apparent problem and to the cultural norms of the region,
			however it does NOT have to be limited. <br />
			The progress of humanity up to this point and moving forward was and still
			is driven by how well we can harvest the power of perspective (also
			referred to as “thinking outside of the box”) - which is the source of
			creativity and innovation.
			</span>
		</p>
		<p className="c2 c6">
			<span className="c0" />
		</p>
		<hr/>
		<p className="c2">
			<span className="c1">
			Example of solving a problem using the power of perspective:
			</span>
		</p>
		<p className="c2">
			<span className="c1">
			(credit to Peter Sage for this example - which inspired the current paper)
			</span>
		</p>
		<p className="c2 c6">
			<span className="c1" />
		</p>
		<hr/>
		<p className="c2">
			<span className="c1">
			The problem - an individual struggling with lack of time. Desires to learn
			better time management skills.
			</span>
		</p>
		<hr/>
		<p className="c2">
			<span className="c1">
			<br />
			<br />
			Observations:{" "}
			</span>
		</p>
		<p className="c2">
			<span className="c1">
			His perspective was limited by the familiar - how he used to to do things
			- by his environment and the people he interacted with.
			</span>
		</p>
		<p className="c2 c6">
			<span className="c1" />
		</p>
		<p className="c2">
			<span className="c1">
			Devising a solution:
			<br />
			</span>
		</p>
		<p className="c2">
			<span className="c1">
			Step 1: Establishing an objective with an outwards to inwards look.
			</span>
		</p>
		<p className="c2">
			<span className="c4">
			<br />
			What does the individual ultimately{" "}
			</span>
			<span className="c4">want</span>
			<span className="c4">?</span>
			<span className="c1">
			<br />{" "}
			</span>
		</p>
		<ul className="c5 lst-kix_vdsa1c4pdmky-0 start">
			<li className="c2 c8 li-bullet-0">
			<span className="c1">More time to do things he enjoys</span>
			</li>
			<li className="c2 c8 li-bullet-0">
			<span className="c1">Less stress about what he cannot do</span>
			</li>
			<li className="c2 c8 li-bullet-0">
			<span className="c4">Contentment/satisfaction </span>
			<span className="c4">of</span>
			<span className="c4">&nbsp;the people he interacts with </span>
			<span className="c4">with regards to him</span>
			<span className="c1">&nbsp;(the people’s perception of him)</span>
			</li>
			<li className="c2 c8 li-bullet-0">
			<span className="c1">
				And ultimately his own contentment/satisfaction
			</span>
			</li>
		</ul>
		<p className="c2 c6">
			<span className="c1" />
		</p>
		<p className="c2">
			<span className="c1">His initial idea of resolving the problem</span>
		</p>
		<p className="c2 c6">
			<span className="c1" />
		</p>
		<p className="c2">
			<span className="c1">Seeking to learn time management skills.</span>
		</p>
		<p className="c2">
			<span className="c1">
			Does it address all the points to achieve the objective? - not really{" "}
			</span>
		</p>
		<p className="c2 c6">
			<span className="c1" />
		</p>
		<p className="c2">
			<span className="c1">
			How can we change the scope of the problem to have the easiest way of
			implementing a solution to resolve it?
			</span>
		</p>
		<p className="c2 c6">
			<span className="c1" />
		</p>
		<p className="c2">
			<span className="c1">
			We can look for the source/cause of the issue which in this example is the
			habit of saying “yes” to too many things, most of which the individual in
			question has no reason/desire of saying “yes” to.
			</span>
		</p>
		<p className="c2 c6">
			<span className="c1" />
		</p>
		<p className="c2">
			<span className="c1">
			This individual can resolve the problem by weeding out the things that are
			of least benefit to himself.
			</span>
		</p>
		<p className="c2 c6">
			<span className="c1" />
		</p>
		<p className="c2">
			<span className="c1">Solution:</span>
		</p>
		<p className="c2 c6">
			<span className="c1" />
		</p>
		<ul className="c5 lst-kix_bk7tky9xq8ng-0 start">
			<li className="c2 c8 li-bullet-0">
			<span className="c1">
				Eliminate the current tasks he is engaged in that offer the least
				benefits
			</span>
			</li>
			<li className="c2 c8 li-bullet-0">
			<span className="c1">
				Create a stricter filter by which he engages in new tasks
			</span>
			</li>
		</ul>
		<hr/>
		<p className="c2">
			<span className="c4">
			<br />
			</span>
			<span className="c0">
			This concept is applied based on the particularities of the state of a
			situation
			</span>
		</p>
		<p className="c2 c6">
			<span className="c0" />
		</p>
		<p className="c2">
			<span className="c0">
			Other examples of problems:
			<br />
			</span>
		</p>
		<ul className="c5 lst-kix_ad4vgrechug9-0 start">
			<li className="c2 c8 li-bullet-0">
			<span className="c0">
				A person that cannot not afford food - One is not hungry simply because
				he is poor. It is the environment and people he surrounds himself with
				and the connections he has with the world around
			</span>
			</li>
			<li className="c2 c8 li-bullet-0">
			<span className="c0">
				A person that wants to lose weight - One is not simply fat because the
				universe decided so, it is a state caused by certain external or
				internal factors which if identified correctly can be addressed to solve
				the problem with the least effort. (Throwing around ideas like diet and
				exercise does not address the cause, such as for an economically poor
				individual the advice “get a job” may not be a valid option )
			</span>
			</li>
			<li className="c2 c8 li-bullet-0">
			<span className="c0">
				One does not have to die simply because what we observe around us tries
				to convince us it is an inevitability. Biological ageing has been
				already classified as a disease by the World Health Organisation and
				progress is already being made to counteract it.
			</span>
			</li>
		</ul>
		<p className="c2">
			<span className="c0">
			<br />
			Granted, some problems seem trickier than others due to the current
			understanding of the reality we enhabit, but the only issue with this is
			that we have not discovered enough perspectives that can be used to target
			the respective issue, but the pool of perspectives is limitless, we just
			have to find the best one.
			<br />
			</span>
		</p>
		<p className="c2">
			<span className="c4">
			Even if this seems like it threatens the integrity of this whole concept,
			it does not!
			</span>
			<span className="c0">
			<br />
			It simply means that certain problems require more time(the third parameter we pass to our function) than others to be
			implemented to their full extent in order to obtain the exact desired
			result, in conclusion, the algorithm still stands and offers the best
			possible solution at a given time.
			<br />
			</span>
		</p>
		<p className="c2">
			<span className="c0">
			Additional note: The ability to find the right perspective is given by
			knowledge and the understanding of the world around. This used to be quite
			an important problem in the past, but we have mostly solved this by
			providing access to the collective knowledge with the use of the internet.
			</span>
		</p>
		<p className="c2">
			<span className="c7">
			Using this we can also gain understanding by searching for the answer to
			the dynamic question: &nbsp; “
			</span>
			<span className="c1">How does X work?”</span>
		</p>
		<p className="c2 c6">
			<span className="c1" />
		</p>
		<p className="c2">
			<span className="c0">
			The more we understand the reality around us, the larger the pool of
			solutions to our problems and desires, and the better the result. <br />
			This does not mean that by not being a physicist or some other type of
			scholar we cannot use this principle. This way of solving problems is
			always going to provide the best possible course of action one can take to
			reach a goal.
			</span>
		</p>
		<p className="c2">
			<span className="c7">And most importantly: </span>
			<span className="c7 c9">IT SCALES</span>
			<span className="c0">.</span>
		</p>
		<p className="c2 c6">
			<span className="c0" />
		</p>
		<p className="c2 c6">
			<span className="c0" />
		</p>
		<p className="c2 c6">
			<span className="c0" />
		</p>
		<p className="c2 c6">
			<span className="c0" />
		</p>
	</article>
  )
}

export default ProblemSolving
