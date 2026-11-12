+++
date = '2026-11-12T00:59:55-03:00'
draft = true
title = 'Ambientes efemeros e os testcontainers'
+++

## Intro

Digamos que você pretende realizar testes em um ambiente isolado, e prefere que isso ocorra em tempo de esteira, com cenários controlados, e que não impacte no ambiente de testes compartilhado. A proposta é utilizar ambientes efemeros, que apenas são iniciados, realizam os testes ou as demandas necessárias e em seguida, o proprio ambiente é desligado e não mais utilizado nem reaproveitado. Isto serve para otimizar nossos testes locais ou até mesmo na esteira.

basta configurar seu repositorio com a lib do test container