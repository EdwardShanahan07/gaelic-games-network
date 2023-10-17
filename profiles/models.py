from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save

COUNTY_CHOICES = (
    ('Antrim', 'Antrim'),
    ('Armagh', 'Armagh'),
    ('Carlow', 'Carlow'),
    ('Cavan', 'Cavan'),
    ('Clare', 'Clare'),
    ('Cork', 'Cork'),
    ('Derry', 'Derry'),
    ('Donegal', 'Donegal'),
    ('Down', 'Down'),
    ('Dublin', 'Dublin'),
    ('Fermanagh', 'Fermanagh'),
    ('Galway', 'Galway'),
    ('Kerry', 'Kerry'),
    ('Kildare', 'Kildare'),
    ('Kilkenny', 'Kilkenny'),
    ('Laois', 'Laois'),
    ('Leitrim', 'Leitrim'),
    ('Limerick', 'Limerick'),
    ('Longford', 'Longford'),
    ('Louth', 'Louth'),
    ('Mayo', 'Mayo'),
    ('Meath', 'Meath'),
    ('Monaghan', 'Monaghan'),
    ('Offaly', 'Offaly'),
    ('Roscommon', 'Roscommon'),
    ('Sligo', 'Sligo'),
    ('Tipperary', 'Tipperary'),
    ('Tyrone', 'Tyrone'),
    ('Waterford', 'Waterford'),
    ('Westmeath', 'Westmeath'),
    ('Wexford', 'Wexford'),
    ('Wicklow', 'Wicklow'),
)


class Profile(models.Model):
    """ User Profile Model """

    owner = models.OneToOneField(User, on_delete=models.CASCADE)
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now_add=True)
    name = models.CharField(max_length=255, blank=True)
    description = models.TextField(blank=True)
    image = models.ImageField(
        upload_to='images/',
        default='../default_profile_dzbvvo',
        blank=True
    )
    county_team = models.CharField(
        max_length=25,
        choices=COUNTY_CHOICES,
        blank=True)
    club_team = models.CharField(max_length=25, blank=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.owner}'s profile"


def create_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(owner=instance)


post_save.connect(create_profile, sender=User)
