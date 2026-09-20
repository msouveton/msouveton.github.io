---
page_id: project_2
layout: page
title: Simulation de trou noir
description: Calcul de la distorsion d'une image par un trou noir de Schwarzschild
img: assets/img/projects/black_hole_illustration.jpg
importance: 1
category: science
---

Ce petit projet a été initié sans grande ambition en 2019 et porte sur la simulation de la distorsion que produit un trou noir sur le rayon lumineux et le fond étoilé. Pour des raisons de simplicité calculatoire, le trou noir est statique et donc la métrique est celle de Schwarzschild. A l'aide d'une petit astuce mathématique, ce problème peut être réduit à la résolution d'une équation de Binet.

$$ \frac{du}{d\theta} = au + bu^2 $$

Le calcul de la distorsion est réalisé sur une image 360° en projection de Mollweide à l'aide d'un code Python raytracing.

Les perspectives de ce travail est d'inclure un disque d'accrétion, afin d'obtenir le fameux rendu de couronne comme dans le film Interstellar, mais également de passer tout la simulation en GPU pour accélerer le temps de calcul à l'aide de shaders.