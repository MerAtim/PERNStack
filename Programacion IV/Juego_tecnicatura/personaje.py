import pygame
import os
from constantes import ASSETS_PATH

class Personaje:
    def __init__(self, x, y):
        # Construye la ruta completa a la imagen del personaje
        self.image = pygame.image.load(os.path.join(ASSETS_PATH, 'images', 'personaje1.png')).convert_alpha()
        self.image = pygame.transform.scale(self.image, (95, 95)) # Escalar la imagen a 95x95 píxeles
        self.shape = self.image.get_rect(center=(x, y))
        self.laser = []
        self.energia = 100

    def mover(self, dx, dy):
        self.shape.x += dx
        self.shape.y += dy

    def lanzar_laser(self):
        laser = Laser(self.shape.centerx, self.shape.top)
        self.laser.append(laser)

    def recibir_dano(self):
        self.energia -= 10
        if self.energia <= 0:
            self.energia <= 0
            return False
        return True

    def dibujar(self, screen):
        screen.blit(self.image, self.shape.topleft)
        for laser in self.laser:
            laser.dibujar(screen)
            laser.mover()

    # Dibujar la barra de energia
    pygame.draw.rect(screen, (255, 0, 0), (10, 10, 100, 10))
    2pygame.draw.rect(screen, (0, 255, 0), (10, 10, self.energia, 10))

