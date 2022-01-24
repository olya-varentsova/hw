from rest_framework.routers import DefaultRouter

from hw.views import FirstViewSet, SecondViewSet

router = DefaultRouter(trailing_slash=False)
router.register('first', FirstViewSet, basename='first')
router.register('second', SecondViewSet, basename='second')

urlpatterns = router.urls