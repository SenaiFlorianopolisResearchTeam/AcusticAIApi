"""

"""

import abc


class UserGateway(abc.ABC):

    @abc.abstractmethod
    def __init__(self):
        pass

    @abc.abstractmethod
    def ping(self) -> str:
        pass
