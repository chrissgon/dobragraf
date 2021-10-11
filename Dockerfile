FROM php:7.4-fpm

RUN apt-get update -y &&\
    apt-get install -y git unzip &&\
    cd ~ &&\ 
    curl -sS https://getcomposer.org/installer -o composer-setup.php &&\
    HASH=`curl -sS https://composer.github.io/installer.sig` &&\
    php composer-setup.php --install-dir=/usr/local/bin --filename=composer &&\
    composer require phpmailer/phpmailer