---
page_id: about
layout: about
title: À propos
permalink: /
subtitle: <em>Doctorant en sciences à <a href='https://pprime.fr/'>l'institut Pprime</a>. Astronome amateur.</em>

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false # crops the image to make it circular
  more_info: >

selected_papers: true # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: false # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

Bonjour et bienvenue sur mon site personnel (en travaux). Je suis actuellement doctorant en physique théorique et j'étudie l'interaction rayonnement-matière dans des milieux fibreux.

Mon travail consiste en la détermination des propriétés radiatives effectives d'un milieu fibreux virtuel. J'utilise d'une part une approche de rayonnement classique et d'optique géométrique aux grandes échelles, et d'autre part, le formalisme des équations de Maxwell de l'électromagnétisme aux petites échelles. J'encadre en parallèle des TDs de mathématiques et des TPs de mécanique des fluides auprès d'élèves en école d'ingénieur.

Vous trouverez de plus amples détails sur mon travail, mes résultats, mais aussi mes projets personnels sur ce site.


<div class="terminal-box" style="background: #1e1e1e; color: #f1f1f1; font-family: monospace; padding: 18px; border-radius: 6px; box-shadow: 0 5px 15px rgba(0,0,0,0.4); margin: 25px 0; max-height: 400px; overflow-y: auto;">
  <div class="terminal-bar" style="border-bottom: 1px solid #333; padding-bottom: 6px; margin-bottom: 12px; font-size: 13px; color: #aaa; display: flex; justify-content: space-between;">
    <span>bash — interactive session</span>
    <span>● ● ●</span>
  </div>
  <div id="term-output" style="white-space: pre-wrap; margin-bottom: 12px; font-size: 14px; line-height: 1.5;">Welcome! Type 'help' to explore my background, or try 'bio' and 'publications'.</div>
  <div class="term-line" style="display: flex; align-items: center;">
    <span style="color: #4af626; margin-right: 8px; font-weight: bold;">guest@academic-site:~$</span>
    <input type="text" id="term-input" style="background: transparent; border: none; color: #ffffff; font-family: monospace; font-size: 14px; flex-grow: 1; outline: none;" autocomplete="off">
  </div>
</div>

<script>
  document.getElementById('term-input').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      const input = e.target;
      const command = input.value.trim().toLowerCase();
      const output = document.getElementById('term-output');
      
      let feedback = `\nguest@academic-site:~$ ${input.value}\n`;
      
      // Define your custom terminal commands here
      if (command === 'help') {
        feedback += "Available commands:\n  [bio]          Brief research background\n  [publications] Show latest bibtex entries\n  [clear]        Reset terminal view";
      } else if (command === 'bio') {
        feedback += "I am a researcher currently working on radiative transfer and electromagnetism within fibrous media.";
      } else if (command === 'publications') {
        feedback += "Loading publications...\n- M. Souveton et al., Phys.Rev.E (2026)";
      } else if (command === 'clear') {
        output.innerHTML = 'Terminal cleared. Type [help] for options.';
        input.value = '';
        return;
      } else if (command === '') {
        feedback = `\nguest@academic-site:~$\n`;
      } else {
        feedback += `bash: command not found: ${command}. Type 'help' for options.`;
      }
      
      output.innerHTML += feedback;
      input.value = '';
      
      // Auto-scroll to the bottom when new text appears
      const box = document.querySelector('.terminal-box');
      box.scrollTop = box.scrollHeight;
    }
  });
</script>

---

## Mon travail

Le contexte de mon travail est l'**isolation thermique** à très hautes températures. Un exemple type est l'emploi de matériaux nanofibreux pour la protection des coiffes de fusées contre la chaleur subie au décollage.

Ma recherche est toutefois théorique et a pour cadre un matériau virtuel ayant des **propriétés morphologiques** idéalisées : un empilement aléatoire de fibres cylindriques semi-transparentes. Une première partie de mon travail a été de calculer les propriétés mathématiques de tels empilements, notamment les distributions des longueurs de cordes dans la phase fibreuse. Ce résultat a été publié dans Physical Review (voir l'onglet Publications).

J'ai ensuite étudié les **propriétés radiatives** de mon matériau aux grandes échelles, c'est-à-dire dans la limite de l'optique géométrique. Pour simuler la propagation du rayonnement, j'utilise une méthode Monte Carlo en lancer de rayons. Les calculs de transmittances et de réflectances ont révélé le comportement non Béérien du milieu et permis le développement d'un modèle radiatif analytique. Ces résultats sont en cours de publication pour JQSRT.

Dans une dernière partie, j'étudie le comportement du milieu lorsque l'échelle des fibres diminue et s'approche de la longueur d'onde à l'aide de la méthode de l'approximation dipolaire discrète (DDA) pour résoudre les équations de Maxwell. L'intérêt est d'observer la frontière entre les lois de l'électromagnétisme et du rayonnement classique. Peut-on imaginer déterminer un modèle radiatif classique capable d'approcher les **résultats électromagnétiques** dans le domaine sub-lambda ?

---

## Mes passions

Passionné depuis mes huit ans par l'**astronomie** après une année scolaire sur le thème de l'espace &mdash; avec un télescope remporté au concours universitaire "Faîtes de la science" de Corse et un voyage à la Cité de l'Espace de Toulouse &mdash;, mes intérêts sont aujourd'hui très variés : observation du ciel, planétologie, physique stellaire, cosmologie, relativité, histoire des sciences et de la conquête spatiale,... J'attache aussi beaucoup d'importance à la vulgarisation et j'ai été animateur de planétarium en 2023. Mes missions : animer le dôme, répondre aux questions du public, mais également intervenir dans des écoles et collèges.

Concernant ma thèse, elle n'est pas directement lié à l'astrophysique. Cependant, un des noms majeurs du rayonnement est le célèbre Chandrasekhar qui a laissé son nom à la masse critique des naines blanches &mdash; et à bien d'autres choses. De plus, j'utilise en électromagnétisme la méthode DDA qui a été développée pour l'étude des poussières interstellaires. C'est un domaine de recherche qui m'intéresse actuellement.

En astronomie amateur, je suis détenteur d'un télescope **Dobson Skywatcher GoTo 300/1500**. Après avoir longtemps apprécié la recherche manuelle des objets du ciel, le choix d'une monture motorisé est motivé par l'astrophotographie. Toutefois, la monture est azimutale et les temps de pose sont forcément limités par la rotation de champ. Pour le moment, je ne me sers uniquement que de mon téléphone, mais je réalise des traitements sur Pipp et Registax. Quelques résultats sont visibles dans Projets.

En informatique, j'aime la programmation depuis ma découverte du langage Basic Casio au lycée. Au travers de concours, je me suis intégré à une communauté en ligne capable de coder en langage C sur calculatrices. Peu de temps après, j'ai décidé d'apprendre un vrai langage informatique. Parmi mes options, j'ai retenu **Python** qui est resté depuis mon langage de prédilection. Une liste de mes codes en Python est visible sur ma page Projets. A noter également mon admiration pour les effets spéciaux et la modélisation 3D. Après plusieurs années sous Adobe After Effect, mon outil phare aujourd'hui est sans nul doute Blender, véritable coûteau suisse et perle open source.

---

## Mes loisirs

Je conclus ma présentation par une liste non-exhaustives de loisirs qui me passionnent :
- L'aviation civile et les **simulateurs de vol** (XPlane 11). Je pilote sur la famille A320 et apparenté.
- L'**escalade** en blocs, en difficultés et en falaises. Je pratique jusqu'à 10h par semaine, pour un niveau intermédiaire. Je travaille du 7A en tête.
- D'autres sports plus sporadiques : via ferrata, spéléologie, renforcement musculaire, course à pied, vélo, tir à l'arc ou encore badminton.
- Les **échecs**. Mes ouvertures favorites sont l'Écossaise et la Caro-Kann. Mon ELO Chess.com est de 1300 en blitz et 1500 en rapide.
- La gastronomie et la mycologie. Grand amateur de cèpes de Bordeaux et de girolles, je ne révèlerai pas mes coins secrets en forêt.
- Le Rubik's cube avec la méthode Ofapel et Fridrich.
- La lecture, la peinture et les jeux de sociétés.
- Le jardinage, la botanique, la faune et la flore. J'ai un attrait pour la connaissance des plantes et des animaux depuis tout petit.
- La musique et les chants polyphoniques corses. Je pratique en amateur la guitare et le piano.

---