---
title: "RT-DETR Nuevo Modelo Deep Learning"
time: "2024-08-16"
description: "Esta nueva versión promete avances significativos en el reconocimiento de imágenes y la segmentación en diversas aplicaciones."
imageUrl: "/rtdetr.jpeg"
videoId: "fqgHlUH3OXQ"
numero: "2"
---

## Visión General

RT-DETR (Real-Time Detection Transformer), desarrollado por Baidu, es un detector de objetos de vanguardia que ofrece rendimiento en tiempo real manteniendo una alta precisión. Se basa en la idea de DETR (el marco libre de NMS), al mismo tiempo que introduce una columna vertebral basada en convoluciones y un codificador híbrido eficiente para lograr velocidad en tiempo real. RT-DETR procesa eficientemente características multiescala al separar la interacción intraescala y la fusión entre escalas. El modelo es altamente adaptable, admitiendo un ajuste flexible de la velocidad de inferencia utilizando diferentes capas decodificador sin necesidad de volver a entrenar. RT-DETR sobresale en backends acelerados como CUDA con TensorRT, superando a muchos otros detectores de objetos en tiempo real.

![Alt text](/RE-DETR.png class="w-1/2 h-auto")
Visión general de RT-DETR de Baidu. El diagrama de arquitectura del modelo RT-DETR muestra las últimas tres etapas de la columna vertebral {S3, S4, S5} como entrada al codificador. El codificador híbrido eficiente transforma características multiescala en una secuencia de características de imagen a través de la interacción de características intraescala (AIFI) y el módulo de fusión de características entre escalas (CCFM). Se emplea la selección de consultas de IoU para seleccionar un número fijo de características de imagen para servir como consultas de objeto iniciales para el decodificador. Finalmente, el decodificador con cabezas de predicción auxiliares optimiza iterativamente las consultas de objeto para generar cajas y puntuaciones de confianza (fuente).

## Características clave

- **Codificador híbrido eficiente:** RT-DETR de Baidu utiliza un codificador híbrido eficiente que procesa características multiescala al separar la interacción intraescala y la fusión entre escalas. Este diseño único basado en Vision Transformers reduce los costos computacionales y permite la detección de objetos en tiempo real.
- **Selección de consultas con conciencia de IoU:** RT-DETR de Baidu mejora la inicialización de consultas de objeto mediante la selección de consultas con conciencia de IoU. Esto permite al modelo centrarse en los objetos más relevantes de la escena, mejorando la precisión de la detección.
- **Velocidad de inferencia adaptable:** RT-DETR de Baidu admite ajustes flexibles de la velocidad de inferencia mediante el uso de diferentes capas decodificador sin necesidad de volver a entrenar. Esta adaptabilidad facilita la aplicación práctica en varios escenarios de detección de objetos en tiempo real.

## Modelos preentrenados

La API de Python de Ultralytics proporciona modelos preentrenados de PaddlePaddle - RT-DETR con diferentes escalas:

- RT-DETR-L: 53.0% de AP en COCO val2017
- 114 FPS en GPU T4
