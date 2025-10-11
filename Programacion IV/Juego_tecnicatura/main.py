import pygame
import sys
import random
import os

from personaje import Personaje, Enemigos, Explosion
from constantes import SCREEN_WIDTH, SCREEN_HEIGHT, ASSETS_PATH


def mostrar_imagen_inicial(screen, imagen_path, duracion):
    imagen = pygame.image.load(imagen_path).convert()
    imagen = pygame.transform.scale(imagen, (SCREEN_WIDTH, SCREEN_HEIGHT))
    #screen.blit(imagen, (0, 0)) # Mostrar la imagen en la pantalla
    #pygame.display.flip() # Actualizar la pantalla
    #pygame.time.delay(duracion) # Esperar la duración especificad a

    # Bucle para mostrar la imagen principal con una opacidad
    alpha = 255 # Opacidad inicial
    clock = pygame.time.Clock()
    tiempo_inicial = pygame.time.get_ticks()
    tiempo_total = duracion # Duración total en milisegundos

    while pygame.time.get_ticks() - tiempo_inicial < tiempo_total:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                sys.exit()

        # Calcular la opacidad actual
        tiempo_transcurrido = pygame.time.get_ticks() - tiempo_inicial
        alpha = max(0, 255 - int((tiempo_transcurrido / tiempo_total) * 255))

        # Crear una copia de la imagen con la opacidad actual
        imagen_con_alpha = imagen.copy()
        imagen_con_alpha.set_alpha(alpha)

        # Dibujar la imagen con la opacidad actual
        screen.fill((0, 0, 0)) # Limpiar la pantalla
        screen.blit(imagen_con_alpha, (0, 0))
        pygame.display.flip()
        clock.tick(60) # Limitar a 60 FPS

