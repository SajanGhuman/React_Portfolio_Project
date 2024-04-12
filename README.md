1) git clone https://github.com/SajanGhuman/final_portfolio.git
2) cd final_portfolio
3) 	sudo docker build -t singh_sajanpreet_final_site .
4) sudo docker run -dp 5575:5575 --name singh_sajanpreet_final_site singh_sajanpreet_final_site
5) sudo docker start singh_sajanpreet_final_site 
6) the site should now be hosted at http://localhost:5575
