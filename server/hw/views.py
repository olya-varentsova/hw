from django.shortcuts import render
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from rest_framework import viewsets
from hw.models import First, Second
from hw.serializer import FirstSerializer, SecondSerializer
# Create your views here.


class FirstViewSet(viewsets.GenericViewSet):
    """
    CRUD first viewset
    """
    queryset = First.objects.all()
    serializer_class = FirstSerializer
    model = First

    def list(self, request):
        response = self.get_serializer(self.get_queryset(), many=True).data
        return Response(status=200, data=response)

    def create(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(status=201, data=serializer.data)

    def retrieve(self, request, pk=None):
        first = get_object_or_404(self.get_queryset(), id=pk)
        serializer = self.get_serializer(first)
        return Response(status=200, data=serializer.data)

    def partial_update(self, request, pk=None):
        first = get_object_or_404(self.get_queryset(), id=pk)
        serializer = self.get_serializer(first, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(status=200, data=serializer.data)

    def destroy(self, request, pk=None):
        first = get_object_or_404(self.get_queryset(), id=pk)
        first.delete()
        return Response(status=200)


class SecondViewSet(viewsets.GenericViewSet):
    """
    CRUD first viewset
    """
    queryset = Second.objects.all()
    serializer_class = SecondSerializer
    model = Second

    def list(self, request):
            id = int(request.GET.get('id', 0))
            response = self.get_serializer(self.get_queryset(), many=True).data
            if id > 0:
                return Response(status=200, data=list(filter(lambda x: x['fk'] == id, response)))
            else:
                return Response(status=200, data=response)

    def create(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(status=201, data=serializer.data)

    def retrieve(self, request, pk=None):
        first = get_object_or_404(self.get_queryset(), id=pk)
        serializer = self.get_serializer(first)
        return Response(status=200, data=serializer.data)

    def partial_update(self, request, pk=None):
        first = get_object_or_404(self.get_queryset(), id=pk)
        serializer = self.get_serializer(first, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(status=200, data=serializer.data)

    def destroy(self, request, pk=None):
        first = get_object_or_404(self.get_queryset(), id=pk)
        first.delete()
        return Response(status=200)
