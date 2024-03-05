########################################################################
####################### Makefile Template ##############################
########################################################################
# Student settings
NAME = 'Josue Gomez'
SID = '1001852411'
EMAIL = 'josue.gomez@mavs.uta.edu'
SEMESTER = SPRING2024
HE_PARTNERS = 'Karl Dylan Matignas Baes_Bishal Giri_Diwas Sapkota_Ismael Tovar'
 

####### DO NOT EDIT BELOW THIS LINE!!! #########
author: 
	@echo $(NAME)
	@echo $(SID)
	@echo $(EMAIL)
	@echo $(SEMESTER)
	@echo $(HE_PARTNERS)
submit:
	zip -r "submission_$(SEMESTER)_$(SID)_$(NAME).zip" .


cleanup:
	@rm -f .DS_Store
	@rm -f */.DS_Store

