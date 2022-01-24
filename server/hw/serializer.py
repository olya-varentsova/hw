from rest_framework import serializers
from hw.models import First, Second


class FirstSerializer(serializers.ModelSerializer):
    class Meta:
        model = First
        fields = '__all__'


class SecondSerializer(serializers.ModelSerializer):
    class Meta:
        model = Second
        fields = '__all__'
