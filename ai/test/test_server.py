import unittest
from flask import Flask
from server import app

class TestServer(unittest.TestCase):

    def test_hello_world(self):
        tester = app.test_client(self)
        response = tester.get("/")
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data, b'<p>Hello, World!</p>')

if __name__ == '__main__':
    unittest.main()