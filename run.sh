echo "Running tower2/html_to_pdf"

docker run -i --rm --env PORT=3001 --cap-add=SYS_ADMIN -p 3001:3001/tcp --name html-to-pdf ifournight/html-to-pdf
# docker run -d -i --rm --env PORT=3001 --cap-add=SYS_ADMIN -p 3001:3001/tcp --name html-to-pdf ifournight/html-to-pdf
