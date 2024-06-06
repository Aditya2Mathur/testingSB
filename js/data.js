// Services For Serive page
fetch('../data/services.json')
            .then(response => response.json())
            .then(data => {
                const services = data.services;
                const servicesRow = document.getElementById('services-row');
        
                // Create dynamic service cards
                services.forEach(service => {
                    const serviceCard = document.createElement('div');
                    serviceCard.classList.add('col-lg-4', 'col-md-6', 'col-12', 'service-card', 'wow', 'fadeInUp');
        
                    serviceCard.innerHTML = `
                        <div class="our-services-item">
                            <div class="service-item-image">
                                <img src="${service.image}" alt="${service.name}">
                            </div>
                            <div class="services-item-content">
                                <h3>${service.name}</h3>
                                <p>${service.paragraph}</p>
                                <ul>
                                    ${service.points.map(point => `<li>${point}</li>`).join('')}
                                </ul>
                            </div>
                            <div class="services-item-btn">
                                <a href="${service.link}" class="btn-default">Read More</a>
                            </div>
                        </div>
                    `;
        
                    servicesRow.appendChild(serviceCard);
                });
            })
            .catch(error => console.error('Error fetching services data:', error));
            



//  5 services for index page
// data.js
fetch('data/services.json')
    .then(response => response.json())
    .then(data => {
        const services = data.services.slice(0, 5); // Get only the top 5 services
        const servicesRow = document.getElementById('services-row-index');

        services.forEach(service => {
            const serviceCard = document.createElement('div');
            serviceCard.classList.add('col-lg-4', 'col-md-4'); // Adjusted class to match the provided HTML

            serviceCard.innerHTML = `
                <div class="medical-service-item wow fadeInUp">
                    <div class="medical-service-content">
                        <div class="icon-box">
                            <img src="${service.image}" alt="">
                        </div>
                        <div class="medical-content">
                            <h3>${service.name}</h3>
                            <p>${service.paragraph}</p>
                        </div>
                        <div class="medical-service-btn">
                            <a href="${service.link}" class="btn-services">read more <i class="far fa-arrow-alt-circle-right"></i></a>
                        </div>
                    </div>
                </div>
            `;

            servicesRow.appendChild(serviceCard);
        });
    })
    .catch(error => console.error('Error fetching services data:', error));

    // Blogs for blog page
// script.js
$(document).ready(function() {
    $.getJSON('data/blog.json', function(data) {
        const blogs = data.blogs;
        const cardsPerPage = 6;
        let currentPage = 1;

        function displayBlogCards(page) {
            const startIndex = (page - 1) * cardsPerPage;
            const endIndex = startIndex + cardsPerPage;
            const paginatedBlogs = blogs.slice(startIndex, endIndex);

            $('#blogCards').empty();
            paginatedBlogs.forEach(blog => {
                const card = `
                    <div class="col-lg-4 col-md-6">
                        <div class="post-item">
                            <div class="post-featured-image">
                                <figure class="image-anime">
                                    <a href="#"><img src="${blog.img}" alt=""></a>
                                </figure>
                            </div>
                            <div class="post-item-body">
                                <h2><a href="#">${blog.title}</a></h2>
                                <p>${blog.content}</p>
                            </div>
                            <div class="btn-readmore">
                                <a href="${blog.read_more}">Read More <i class="fa-solid fa-arrow-right-long"></i></a>
                            </div>
                        </div>
                    </div>
                `;
                $('#blogCards').append(card);
            });
        }

        function displayPagination() {
            const totalPages = Math.ceil(blogs.length / cardsPerPage);
            let pagination = '<ul class="pagination">';
            for (let i = 1; i <= totalPages; i++) {
                pagination += `<li><a href="#" onclick="changePage(${i})">${i}</a></li>`;
            }
            pagination += '</ul>';
            $('#pagination').html(pagination);
        }

        function changePage(page) {
            currentPage = page;
            displayBlogCards(currentPage);
        }

        displayBlogCards(currentPage);
        displayPagination();
    });
});
