import requests

def verifyJWT(token):
    url = 'http://localhost:4000/validatetoken'
    headers = {'Content-Type': 'application/json'}
    payload = {'accessToken': token}

    try:
        response = requests.post(url, json=payload, headers=headers)
        response.raise_for_status()

        if response.status_code == 200:
            print('Token is valid')
        elif response.status_code == 401:
            print('Invalid token')
        else:
            print('Unexpected response:', response.status_code)
    except requests.exceptions.RequestException as e:
        print('Error sending token:', e)