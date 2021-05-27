FROM python:3.6

ENV PYTHONUNBUFFERED 1

# create root directory for our project in the container
RUN mkdir /back_cadeomw

# Set the working directory to /back_cadeomw
WORKDIR /back_cadeomw

# Copy the current directory contents into the container at /back_cadeomw
COPY . /back_cadeomw/

# Install any needed packages specified in requirements.txt
RUN pip install -r requirements.txt

RUN python manage.py 