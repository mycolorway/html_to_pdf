echo "Running tower2/html_to_pdf"

docker run -i --rm --env PORT=3002 --cap-add=SYS_ADMIN -p 3002:3002/tcp --name html_to_pdf tower2/html_to_pdf