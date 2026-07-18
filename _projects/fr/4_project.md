---
page_id: project_4
layout: page
title: Minecraft
description: Implémentation d'une copie du jeu Minecraft en Python
img:
importance: 1
category: fun
---

C'est probablement le plus gros projet en Python que j'aie jamais tenté. L'idée m'est venu en 2018 à un moment où Python était déjà mon langage de prédilection, que j'étais impliqué dans de nombreux petits jeux mais que je n'avais jamais rien tenté nécessitant de la 3D. Tout au plus, j'avais voulu créer un petit moteur capable de dessiner des primitives 3D à l'aide d'une librairie de dessin 2D basique. Cela n'avait pas été fructueux. Il me manquait à l'époque des notions essentielles concernant le fonctionnement des caméras, à savoir l'utilisation des matrices de vue et de projection, ce qui m'auraient grandement simplifié les calculs...

Cela étant, je voulais passer à un jeu 3D depuis quelques temps et quoi de mieux que de se jeter tête baissée dans un Minecraft-like, dont l'aspect cubique et peu texturé laissait entrevoir une certaine facilité d'implémentation. Il était bien entendu hors de question de recréer un moteur de jeu à zéro à partir d'une librairie 2D, et j'ai dû donc faire un choix. Il s'est porté sur l'utilisation d'OpenGL et du module Pyglet. Il existe bien sûr d'autres librairies qui implémentent cette API, mais Pyglet me semblait être la plus épurée et donc la plus proche de la machine. Quant au choix de Python plutôt que d'un langage compilé, c'était avant tout pour pouvoir prouver qu'on pouvait s'en passer dans une certaine mesure : quoi de mieux que d'allier à la fois la liberté de Python et la puissance du calcul GPU ?

Le projet s'est déroulé en 3 phases. La première a duré aux alentours de 3 semaines en 2018. C'est là où j'ai appris à utiliser Pyglet et où j'ai appris le langage OpenGL 1.X. Malgré la difficulté de prise en main intiale de toutes les fonctions d'OpenGL ainsi que de la philosophie de Pyglet, j'ai réussi à construire mon monteur 3D à partir de quasiment rien (puisqu'en OPenGL 1.X et Pyglet 1.X on doit travailler à la main sur les matrices de vue et les espaces tampons affichés à l'écran) et à obtenir à la fin un début de jeu : un petit monde explorable avec des déplacements très basiques (et saccadés quand je l'ai retesté récemment, notamment au niveau des sauts et de la gravité), un HUD basique et un inventaire parcourable avec quelques blocs pour interragir avec son environnement. A la fin de cette phase, j'avais suffisamment avancé pour me rendre compte de la difficulté d'aller plus loin, d'avoir des mécaniques beaucoup plus précises, et surtout, d'avoir un code parfaitement structuré. Il me manquait la philosophie d'un programmeur de jeux vidéos.

La deuxième phase a été très courte et a dûré environ 1 semaine en 2021. Durant cette période, j'avais initialement prévu de restructurer mon code à zéro. Mais par manque de connaissances sur comment si prendre, je me suis rabattu sur l'ajout du chat textuel de Minecraft. La raison était simple : en ajoutant le chat textuel, j'obtenais un moyen très pratique de coder un langage pour communiquer en direct, en pleine session, avec les variables du jeu, et sans avoir besoin de couper et relancer le code à chaque fois ! Mais la difficulté était élevée : comment ajouter à l'HUD un cadre de texte défilable et avec lequel on peut interagir ? Après plusieurs jours de tentative, j'ai obtenu un début de code qui faisait ce que je souhaitais, mais par manque d'énergie, cette phase s'est arrêtée là.

La dernière phase a eu lieu en 2026 et a été déclenché par le passage à la version Pyglet 2.X et à OpenGL 3+. Qui dit changement de paradygme, dit que mon code précédent n'était plus exécutable, mais dit aussi grosse optimisation en perspective. Je me suis donc lancé comme défi de reprendre à zéro mon premier code en me concentrant immédiatement sur tous les soucis que j'avais pu rencontrer précédemment. Les objectifs initiaux étaient donc les suivants : améliorer la structure orientée objet du code en isolant correctement les différents systèmes du jeu et en implémentant un système de communication entre eux, améliorer l'implémentation de la 2D en faisant en sorte que le système HUD soit très propre et très robuste, et enfin rendre le déplacement de la caméra parfait. Ce que j'entends par parfait, c'est aussi proche que possible du jeu réel, tant les mouvements aux claviers que les effets de la gravité. Sur ce dernier point, je suis fier de dire que je m'en suis très bien sorti et que la sensation en jeu est à présent très proche de la sensation réelle. Cela m'a appris de nombreuses choses, notamment que le mouvement dans Minecraft se fait à base de coefficient de frictions ! 

{% raw %}

```python
def camera:
    return

def joueur:
    return

def monde:
    return
```

{% endraw %}

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/1.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/3.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Caption photos easily. On the left, a road goes through a tunnel. Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This image can also have a caption. It's like magic.
</div>

You can also put regular text between your rows of images.
Say you wanted to write a little bit about your project before you posted the rest of the images.
You describe how you toiled, sweated, _bled_ for your project, and then... you reveal its glory in the next row of images.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>

The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above:

{% raw %}

```html
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
```

{% endraw %}
