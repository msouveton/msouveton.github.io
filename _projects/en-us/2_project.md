---
page_id: project_2
layout: page
title: Black hole simulation
description: Calculation of the distortion of an image by a Schwarzschild black hole
img: assets/img/projects/black_hole_illustration.jpg
importance: 2
category: science
---

This small project was initiated without any great ambition in 2019 and focuses on simulating the distortion caused by a black hole on a light ray and a starry background. For the sake of computational simplicity, the black hole is static and therefore the metric is that of Schwarzschild. Using a small mathematical trick, this problem can be reduced to solving a Binet equation.

$$ \frac{du}{d\theta} = au + bu^2 $$

The distortion is calculated on a 360° image in Mollweide projection using a Python ray tracing programme.

Future work on this project involves including an accretion disc, in order to achieve the famous corona effect seen in the film Interstellar, as well as moving the entire simulation to the GPU to speed up computation time using shaders.