import{a,u as s,o,c as n,b as r}from"./app-329f424b.js";const i={class:"prose"},u=461327,f="OOD-Speech: A Benchmark Dataset for Bengali ASR",m="ood-speech-benchmark-dataset-bengali-asr",b="2023-09-23T16:00:00.000Z",k="nlp, asr, bengali, dataset",w="OOD-Speech is the largest Bengali ASR dataset designed for out-of-distribution benchmarking. Learn about its significance and applications in improving robust speech recognition.",v=null,O=null,S="https://arxiv.org/abs/2305.09688",B="/articles/ood-speech-benchmark-dataset-bengali-asr",x=null,A="https://raw.githubusercontent.com/BengaliAI/bengaliai.github.io/main/images/tsne_all_ppx40.png",D=[{property:"og:title",content:"OOD-Speech: A Benchmark Dataset for Bengali ASR"}],l={__name:"ood-speech-benchmark-dataset-bengali-asr",setup(c,{expose:t}){return t({frontmatter:{id:461327,title:"OOD-Speech: A Benchmark Dataset for Bengali ASR",slug:"ood-speech-benchmark-dataset-bengali-asr",published_at:"2023-09-23T16:00:00.000Z",tags:"nlp, asr, bengali, dataset",excerpt:"OOD-Speech is the largest Bengali ASR dataset designed for out-of-distribution benchmarking. Learn about its significance and applications in improving robust speech recognition.",crosspostedOn:null,crosspostLink:null,url:"https://arxiv.org/abs/2305.09688",path:"/articles/ood-speech-benchmark-dataset-bengali-asr",canonicalUrl:null,cover_image:"https://raw.githubusercontent.com/BengaliAI/bengaliai.github.io/main/images/tsne_all_ppx40.png",meta:[{property:"og:title",content:"OOD-Speech: A Benchmark Dataset for Bengali ASR"}]}}),s({title:"OOD-Speech: A Benchmark Dataset for Bengali ASR",meta:[{property:"og:title",content:"OOD-Speech: A Benchmark Dataset for Bengali ASR"}]}),(d,e)=>(o(),n("div",i,e[0]||(e[0]=[r('<p>The OOD-Speech dataset is a groundbreaking step toward building robust and inclusive speech recognition systems for Bengali speakers. In this post, we’ll explore the purpose behind the dataset, its core features, and why it’s a significant benchmark for improving Automatic Speech Recognition (ASR) in out-of-distribution (OOD) contexts.</p><h2 id="table-of-contents" tabindex="-1"><a class="header-anchor" href="#table-of-contents"><span class="sr-only">Jump to heading</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg></a> Table of contents</h2><ul><li><a href="#introduction-to-ood-speech">Introduction to OOD-Speech</a></li><li><a href="#key-features-of-ood-speech">Key Features of OOD-Speech</a></li><li><a href="#challenges-addressed">Challenges Addressed</a></li><li><a href="#how-ood-speech-is-built">How OOD-Speech is Built</a></li><li><a href="#applications-and-benchmarking">Applications and Benchmarking</a></li><li><a href="#further-reading">Further Reading</a></li></ul><h2 id="introduction-to-ood-speech" tabindex="-1"><a class="header-anchor" href="#introduction-to-ood-speech"><span class="sr-only">Jump to heading</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg></a> Introduction to OOD-Speech</h2><p><strong>OOD-Speech</strong> is the largest dataset for Bengali ASR, designed to handle out-of-distribution benchmarking. Released in <strong>May 2023</strong>, it offers a collection of <strong>1177.94 hours of speech data</strong> from over <strong>22,000 speakers</strong> across diverse Bengali-speaking regions in South Asia.</p><p>This dataset was created to address one of the most significant hurdles in modern ASR: <strong>distribution shifts</strong>. Traditional ASR models struggle with out-of-distribution speech variations, such as regional dialects or conversational prosody, making OOD-Speech a critical resource for training models that can perform better in real-world environments.</p><p><img src="https://raw.githubusercontent.com/BengaliAI/bengaliai.github.io/main/images/tsne_all_ppx40.png" alt="alt OOD dataset"></p><h2 id="key-features-of-ood-speech" tabindex="-1"><a class="header-anchor" href="#key-features-of-ood-speech"><span class="sr-only">Jump to heading</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg></a> Key Features of OOD-Speech</h2><ul><li><strong>Largest Bengali ASR Dataset</strong>: The dataset includes <strong>1177.94 hours of speech</strong> from over 22,000 speakers.</li><li><strong>Diverse Speech Sources</strong>: The dataset captures speech from religious sermons, talk shows, TV series, audiobooks, and more, ensuring coverage of different speech contexts.</li><li><strong>High-Quality Annotations</strong>: Annotated text accompanies the audio, making it ideal for training and benchmarking ASR models.</li><li><strong>OOD Test Dataset</strong>: A dedicated <strong>23.03 hours</strong> test dataset comprising speech from <strong>17 different domains</strong>, designed to test model robustness against unseen data.</li></ul><h2 id="challenges-addressed" tabindex="-1"><a class="header-anchor" href="#challenges-addressed"><span class="sr-only">Jump to heading</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg></a> Challenges Addressed</h2><p>Bengali is a highly <strong>morphologically rich</strong> language with numerous dialects, tonal variations, and regional prosodic differences. The key challenge OOD-Speech aims to address is building speech recognition models that work effectively across different <strong>domains</strong>, <strong>contexts</strong>, and <strong>speakers</strong>.</p><p>By offering out-of-distribution speech data, the dataset pushes the boundaries of ASR models to handle:</p><ul><li><strong>Varying accents and dialects</strong> from different parts of South Asia.</li><li><strong>Noisy environments</strong> like street noise or background conversations.</li><li><strong>Different registers</strong> of speech, such as formal vs. conversational.</li></ul><h2 id="how-ood-speech-is-built" tabindex="-1"><a class="header-anchor" href="#how-ood-speech-is-built"><span class="sr-only">Jump to heading</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg></a> How OOD-Speech is Built</h2><p>The dataset was built through large-scale <strong>crowdsourcing</strong> efforts, with careful curation to ensure the inclusion of various speech domains. The primary goal was to gather data that simulates real-world Bengali speech across various settings. Here’s how it was structured:</p><ul><li><strong>Source Diversity</strong>: Data was collected from speakers of different ages, regions, and educational backgrounds to provide wide linguistic coverage.</li><li><strong>Annotations</strong>: Each speech sample was annotated for phonetic clarity and context, ensuring the highest quality for training robust models.</li></ul><h2 id="applications-and-benchmarking" tabindex="-1"><a class="header-anchor" href="#applications-and-benchmarking"><span class="sr-only">Jump to heading</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg></a> Applications and Benchmarking</h2><p>Researchers and developers can leverage the OOD-Speech dataset to:</p><ul><li><strong>Benchmark ASR models</strong> for Bengali under out-of-distribution conditions.</li><li>Train <strong>speech-to-text systems</strong> that perform well across dialects and speech contexts.</li><li>Develop more <strong>inclusive language technologies</strong>, making Bengali ASR available to more people globally.</li></ul><p>As an <strong>open dataset</strong>, it enables comparison across models and encourages collaborative improvements in Bengali language technology.</p><h2 id="further-reading" tabindex="-1"><a class="header-anchor" href="#further-reading"><span class="sr-only">Jump to heading</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg></a> Further Reading</h2><p>To learn more about OOD-Speech and access the dataset, check out the official paper and project page:</p><ul><li><strong>Project Page</strong>: <a href="https://bengaliai.github.io/asr">OOD-Speech on Bengali.AI</a></li><li><strong>Research Paper</strong>: <a href="https://arxiv.org/abs/2305.09688">OOD-Speech: A Large Bengali Speech Recognition Dataset for Out-of-Distribution Benchmarking</a></li></ul>',23)])))}},y=a(l,[["__file","/home/runner/work/portfolio/portfolio/content/articles/ood-speech-benchmark-dataset-bengali-asr.md"]]);export{x as canonicalUrl,A as cover_image,O as crosspostLink,v as crosspostedOn,y as default,w as excerpt,u as id,D as meta,B as path,b as published_at,m as slug,k as tags,f as title,S as url};
