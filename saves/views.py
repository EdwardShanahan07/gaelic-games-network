from rest_framework import generics, permissions
from drf_api.permissions import IsOwnerOrReadOnly
from saves.models import Save
from saves.serializers import SaveSerializer


class SaveList(generics.ListCreateAPIView):
    """
    List saves or create a like if logged in.
    """
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    serializer_class = SaveSerializer
    queryset = Save.objects.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class SaveDetail(generics.RetrieveDestroyAPIView):
    """
    Get a save if the user own like they can remove it
    """
    permission_classes = [IsOwnerOrReadOnly]
    serializer_class = SaveSerializer
    queryset = Save.objects.all()
