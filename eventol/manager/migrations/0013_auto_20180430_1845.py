# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2018-04-30 18:45
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('manager', '0012_event_cname'),
    ]

    operations = [
        migrations.AddField(
            model_name='event',
            name='use_collaborators',
            field=models.BooleanField(default=True, verbose_name='Use Collaborators'),
        ),
        migrations.AddField(
            model_name='event',
            name='use_installations',
            field=models.BooleanField(default=True, verbose_name='Use Installations'),
        ),
        migrations.AddField(
            model_name='event',
            name='use_installers',
            field=models.BooleanField(default=True, verbose_name='Use Installers'),
        ),
        migrations.AddField(
            model_name='event',
            name='use_proposals',
            field=models.BooleanField(default=True, verbose_name='Use Proposals'),
        ),
    ]
