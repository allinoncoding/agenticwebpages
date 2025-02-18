<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2487.5">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica; min-height: 14.0px}
  </style>
</head>
<body>
<p class="p1">// Chart 1: Homicide Victimization</p>
<p class="p1"><span class="Apple-converted-space">    </span>const homicideCtx = document.getElementById('homicideChart').getContext('2d');</p>
<p class="p1"><span class="Apple-converted-space">    </span>const homicideChart = new Chart(homicideCtx, {</p>
<p class="p1"><span class="Apple-converted-space">        </span>type: 'bar',</p>
<p class="p1"><span class="Apple-converted-space">        </span>data: {</p>
<p class="p1"><span class="Apple-converted-space">            </span>labels: ['Black', 'White'],</p>
<p class="p1"><span class="Apple-converted-space">            </span>datasets: [{</p>
<p class="p1"><span class="Apple-converted-space">                </span>label: 'Homicide Rate per 100k',</p>
<p class="p1"><span class="Apple-converted-space">                </span>data: [36.4, 4.5],</p>
<p class="p1"><span class="Apple-converted-space">                </span>backgroundColor: ['rgba(54, 162, 235, 0.7)', 'rgba(255, 99, 132, 0.7)'],</p>
<p class="p1"><span class="Apple-converted-space">                </span>borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],</p>
<p class="p1"><span class="Apple-converted-space">                </span>borderWidth: 1</p>
<p class="p1"><span class="Apple-converted-space">            </span>}]</p>
<p class="p1"><span class="Apple-converted-space">        </span>},</p>
<p class="p1"><span class="Apple-converted-space">        </span>options: {</p>
<p class="p1"><span class="Apple-converted-space">            </span>scales: {</p>
<p class="p1"><span class="Apple-converted-space">                </span>y: {</p>
<p class="p1"><span class="Apple-converted-space">                    </span>beginAtZero: true,</p>
<p class="p1"><span class="Apple-converted-space">                    </span>title: {</p>
<p class="p1"><span class="Apple-converted-space">                        </span>display: true,</p>
<p class="p1"><span class="Apple-converted-space">                        </span>text: 'Rate per 100,000 Population'</p>
<p class="p1"><span class="Apple-converted-space">                    </span>}</p>
<p class="p1"><span class="Apple-converted-space">                </span>}</p>
<p class="p1"><span class="Apple-converted-space">            </span>},</p>
<p class="p1"><span class="Apple-converted-space">            </span>plugins: {</p>
<p class="p1"><span class="Apple-converted-space">                </span>title: {</p>
<p class="p1"><span class="Apple-converted-space">                    </span>display: false, // Title is already in &lt;h2&gt; above canvas</p>
<p class="p1"><span class="Apple-converted-space">                </span>},</p>
<p class="p1"><span class="Apple-converted-space">                </span>legend: {</p>
<p class="p1"><span class="Apple-converted-space">                    </span>display: false // Legend is not needed for two bars</p>
<p class="p1"><span class="Apple-converted-space">                </span>}</p>
<p class="p1"><span class="Apple-converted-space">            </span>}</p>
<p class="p1"><span class="Apple-converted-space">        </span>}</p>
<p class="p1"><span class="Apple-converted-space">    </span>});</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>// Chart 2: Violent Victimization</p>
<p class="p1"><span class="Apple-converted-space">    </span>const violentCrimeCtx = document.getElementById('violentCrimeChart').getContext('2d');</p>
<p class="p1"><span class="Apple-converted-space">    </span>const violentCrimeChart = new Chart(violentCrimeCtx, {</p>
<p class="p1"><span class="Apple-converted-space">        </span>type: 'bar',</p>
<p class="p1"><span class="Apple-converted-space">        </span>data: {</p>
<p class="p1"><span class="Apple-converted-space">            </span>labels: ['Black', 'White'],</p>
<p class="p1"><span class="Apple-converted-space">            </span>datasets: [{</p>
<p class="p1"><span class="Apple-converted-space">                </span>label: 'Violent Victimization Rate per 1,000',</p>
<p class="p1"><span class="Apple-converted-space">                </span>data: [28.2, 19.7],</p>
<p class="p1"><span class="Apple-converted-space">                </span>backgroundColor: ['rgba(54, 162, 235, 0.7)', 'rgba(255, 99, 132, 0.7)'],</p>
<p class="p1"><span class="Apple-converted-space">                </span>borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],</p>
<p class="p1"><span class="Apple-converted-space">                </span>borderWidth: 1</p>
<p class="p1"><span class="Apple-converted-space">            </span>}]</p>
<p class="p1"><span class="Apple-converted-space">        </span>},</p>
<p class="p1"><span class="Apple-converted-space">        </span>options: {</p>
<p class="p1"><span class="Apple-converted-space">            </span>scales: {</p>
<p class="p1"><span class="Apple-converted-space">                </span>y: {</p>
<p class="p1"><span class="Apple-converted-space">                    </span>beginAtZero: true,</p>
<p class="p1"><span class="Apple-converted-space">                    </span>title: {</p>
<p class="p1"><span class="Apple-converted-space">                        </span>display: true,</p>
<p class="p1"><span class="Apple-converted-space">                        </span>text: 'Rate per 1,000 Persons (Age 12+)'</p>
<p class="p1"><span class="Apple-converted-space">                    </span>}</p>
<p class="p1"><span class="Apple-converted-space">                </span>}</p>
<p class="p1"><span class="Apple-converted-space">            </span>},</p>
<p class="p1"><span class="Apple-converted-space">            </span>plugins: {</p>
<p class="p1"><span class="Apple-converted-space">                </span>title: {</p>
<p class="p1"><span class="Apple-converted-space">                    </span>display: false,</p>
<p class="p1"><span class="Apple-converted-space">                </span>},</p>
<p class="p1"><span class="Apple-converted-space">                </span>legend: {</p>
<p class="p1"><span class="Apple-converted-space">                    </span>display: false</p>
<p class="p1"><span class="Apple-converted-space">                </span>}</p>
<p class="p1"><span class="Apple-converted-space">            </span>}</p>
<p class="p1"><span class="Apple-converted-space">        </span>}</p>
<p class="p1"><span class="Apple-converted-space">    </span>});</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>// Chart 3: Incarceration Rates</p>
<p class="p1"><span class="Apple-converted-space">    </span>const incarcerationCtx = document.getElementById('incarcerationChart').getContext('2d');</p>
<p class="p1"><span class="Apple-converted-space">    </span>const incarcerationChart = new Chart(incarcerationCtx, {</p>
<p class="p1"><span class="Apple-converted-space">        </span>type: 'bar',</p>
<p class="p1"><span class="Apple-converted-space">        </span>data: {</p>
<p class="p1"><span class="Apple-converted-space">            </span>labels: ['Black', 'White'],</p>
<p class="p1"><span class="Apple-converted-space">            </span>datasets: [{</p>
<p class="p1"><span class="Apple-converted-space">                </span>label: 'Incarceration Rate per 100k',</p>
<p class="p1"><span class="Apple-converted-space">                </span>data: [854, 172],</p>
<p class="p1"><span class="Apple-converted-space">                </span>backgroundColor: ['rgba(54, 162, 235, 0.7)', 'rgba(255, 99, 132, 0.7)'],</p>
<p class="p1"><span class="Apple-converted-space">                </span>borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],</p>
<p class="p1"><span class="Apple-converted-space">                </span>borderWidth: 1</p>
<p class="p1"><span class="Apple-converted-space">            </span>}]</p>
<p class="p1"><span class="Apple-converted-space">        </span>},</p>
<p class="p1"><span class="Apple-converted-space">        </span>options: {</p>
<p class="p1"><span class="Apple-converted-space">            </span>scales: {</p>
<p class="p1"><span class="Apple-converted-space">                </span>y: {</p>
<p class="p1"><span class="Apple-converted-space">                    </span>beginAtZero: true,</p>
<p class="p1"><span class="Apple-converted-space">                    </span>title: {</p>
<p class="p1"><span class="Apple-converted-space">                        </span>display: true,</p>
<p class="p1"><span class="Apple-converted-space">                        </span>text: 'Rate per 100,000 Residents'</p>
<p class="p1"><span class="Apple-converted-space">                    </span>}</p>
<p class="p1"><span class="Apple-converted-space">                </span>}</p>
<p class="p1"><span class="Apple-converted-space">            </span>},</p>
<p class="p1"><span class="Apple-converted-space">            </span>plugins: {</p>
<p class="p1"><span class="Apple-converted-space">                </span>title: {</p>
<p class="p1"><span class="Apple-converted-space">                    </span>display: false,</p>
<p class="p1"><span class="Apple-converted-space">                </span>},</p>
<p class="p1"><span class="Apple-converted-space">                </span>legend: {</p>
<p class="p1"><span class="Apple-converted-space">                    </span>display: false</p>
<p class="p1"><span class="Apple-converted-space">                </span>}</p>
<p class="p1"><span class="Apple-converted-space">            </span>}</p>
<p class="p1"><span class="Apple-converted-space">        </span>}</p>
<p class="p1"><span class="Apple-converted-space">    </span>});</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>// Chart 4: Poverty Rates</p>
<p class="p1"><span class="Apple-converted-space">    </span>const povertyCtx = document.getElementById('povertyChart').getContext('2d');</p>
<p class="p1"><span class="Apple-converted-space">    </span>const povertyChart = new Chart(povertyCtx, {</p>
<p class="p1"><span class="Apple-converted-space">        </span>type: 'bar',</p>
<p class="p1"><span class="Apple-converted-space">        </span>data: {</p>
<p class="p1"><span class="Apple-converted-space">            </span>labels: ['Black', 'White'],</p>
<p class="p1"><span class="Apple-converted-space">            </span>datasets: [{</p>
<p class="p1"><span class="Apple-converted-space">                </span>label: 'Poverty Rate (%)',</p>
<p class="p1"><span class="Apple-converted-space">                </span>data: [22.0, 8.1],</p>
<p class="p1"><span class="Apple-converted-space">                </span>backgroundColor: ['rgba(54, 162, 235, 0.7)', 'rgba(255, 99, 132, 0.7)'],</p>
<p class="p1"><span class="Apple-converted-space">                </span>borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],</p>
<p class="p1"><span class="Apple-converted-space">                </span>borderWidth: 1</p>
<p class="p1"><span class="Apple-converted-space">            </span>}]</p>
<p class="p1"><span class="Apple-converted-space">        </span>},</p>
<p class="p1"><span class="Apple-converted-space">        </span>options: {</p>
<p class="p1"><span class="Apple-converted-space">            </span>scales: {</p>
<p class="p1"><span class="Apple-converted-space">                </span>y: {</p>
<p class="p1"><span class="Apple-converted-space">                    </span>beginAtZero: true,</p>
<p class="p1"><span class="Apple-converted-space">                    </span>title: {</p>
<p class="p1"><span class="Apple-converted-space">                        </span>display: true,</p>
<p class="p1"><span class="Apple-converted-space">                        </span>text: 'Poverty Rate (Percentage)'</p>
<p class="p1"><span class="Apple-converted-space">                    </span>}</p>
<p class="p1"><span class="Apple-converted-space">                </span>}</p>
<p class="p1"><span class="Apple-converted-space">            </span>},</p>
<p class="p1"><span class="Apple-converted-space">            </span>plugins: {</p>
<p class="p1"><span class="Apple-converted-space">                </span>title: {</p>
<p class="p1"><span class="Apple-converted-space">                    </span>display: false,</p>
<p class="p1"><span class="Apple-converted-space">                </span>},</p>
<p class="p1"><span class="Apple-converted-space">                </span>legend: {</p>
<p class="p1"><span class="Apple-converted-space">                    </span>display: false</p>
<p class="p1"><span class="Apple-converted-space">                </span>}</p>
<p class="p1"><span class="Apple-converted-space">            </span>}</p>
<p class="p1"><span class="Apple-converted-space">        </span>}</p>
<p class="p1"><span class="Apple-converted-space">    </span>});</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>// Chart 5: Police Confidence</p>
<p class="p1"><span class="Apple-converted-space">    </span>const policeConfidenceCtx = document.getElementById('policeConfidenceChart').getContext('2d');</p>
<p class="p1"><span class="Apple-converted-space">    </span>const policeConfidenceChart = new Chart(policeConfidenceCtx, {</p>
<p class="p1"><span class="Apple-converted-space">        </span>type: 'bar',</p>
<p class="p1"><span class="Apple-converted-space">        </span>data: {</p>
<p class="p1"><span class="Apple-converted-space">            </span>labels: ['Black', 'White'],</p>
<p class="p1"><span class="Apple-converted-space">            </span>datasets: [{</p>
<p class="p1"><span class="Apple-converted-space">                </span>label: '% Not Confident in Police',</p>
<p class="p1"><span class="Apple-converted-space">                </span>data: [72, 37],</p>
<p class="p1"><span class="Apple-converted-space">                </span>backgroundColor: ['rgba(54, 162, 235, 0.7)', 'rgba(255, 99, 132, 0.7)'],</p>
<p class="p1"><span class="Apple-converted-space">                </span>borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],</p>
<p class="p1"><span class="Apple-converted-space">                </span>borderWidth: 1</p>
<p class="p1"><span class="Apple-converted-space">            </span>}]</p>
<p class="p1"><span class="Apple-converted-space">        </span>},</p>
<p class="p1"><span class="Apple-converted-space">        </span>options: {</p>
<p class="p1"><span class="Apple-converted-space">            </span>scales: {</p>
<p class="p1"><span class="Apple-converted-space">                </span>y: {</p>
<p class="p1"><span class="Apple-converted-space">                    </span>beginAtZero: true,</p>
<p class="p1"><span class="Apple-converted-space">                    </span>title: {</p>
<p class="p1"><span class="Apple-converted-space">                        </span>display: true,</p>
<p class="p1"><span class="Apple-converted-space">                        </span>text: 'Percentage "Not Confident"'</p>
<p class="p1"><span class="Apple-converted-space">                    </span>}</p>
<p class="p1"><span class="Apple-converted-space">                </span>}</p>
<p class="p1"><span class="Apple-converted-space">            </span>},</p>
<p class="p1"><span class="Apple-converted-space">            </span>plugins: {</p>
<p class="p1"><span class="Apple-converted-space">                </span>title: {</p>
<p class="p1"><span class="Apple-converted-space">                    </span>display: false,</p>
<p class="p1"><span class="Apple-converted-space">                </span>},</p>
<p class="p1"><span class="Apple-converted-space">                </span>legend: {</p>
<p class="p1"><span class="Apple-converted-space">                    </span>display: false</p>
<p class="p1"><span class="Apple-converted-space">                </span>}</p>
<p class="p1"><span class="Apple-converted-space">            </span>}</p>
<p class="p1"><span class="Apple-converted-space">        </span>}</p>
<p class="p1"><span class="Apple-converted-space">    </span>});</p>
</body>
</html>
