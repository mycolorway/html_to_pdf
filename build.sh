# docker build --build-arg HTTP_PROXY=172.20.10.2:6152 --build-arg HTTPS_PROXY=172.20.10.2:6152 -t tower2/html_to_pdf .
docker build --no-cache -t tower2/html_to_pdf .
# docker build -t tower2/html_to_pdf .