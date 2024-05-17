const questions = [
    
    {
        question: "The rash shown in the image below is characteristically seen in",
        answers: [
          { text: "Rubella", correct: true },
          { text: "Measles", correct: false },
          { text: "Erythema infectiosum", correct: false },
          { text: "Varicella", correct: false },
        ],
      },
    
    {
        question: "Which of the following is false regarding measles?",
        answers: [
          { text: "The period of infectivity is 3 days before and 5 days after the appearance of rash.", correct: false },
          { text: "The most common complication is pneumonia.", correct: true },
          { text: "Warthin-Finkeldey giant cells are pathognomonic for measles.", correct: false },
          { text: "Koplik spots are pathognomonic of measles", correct: false },
        ],
      },
    
    
    {
        question: "These spots were seen on the inner aspect of cheeks, as shown in the image, in a child who presented with fever and cough. Which of the following is not true?",
        answers: [
          { text: "They represent viral enanthems.", correct: false },
          { text: "They appear 1 to 4 days after the rash.", correct: true },
          { text: "They are seen at the level of molars", correct: false },
          { text: "They may also occur in conjunctiva", correct: false },
        ],
      },
    
    
     {
        question: "A 13-year-old boy presented with a fever, vomiting and headache for 4 days. He has a history of repeated falls due to abnormal jerky movements of the whole body. EEG was characteristic for subacute sclerosing panencephalitis. Prior infection with which of the following infections is most likely in this child?",
        answers: [
          { text: "Mumps", correct: false },
          { text: "Chickenpox", correct: false },
          { text: "Herpes", correct: false },
          { text: "Measles", correct: true },
        ],
      },
    
    {
        question: "What is the secondary attack rate of chickenpox?",
        answers: [
          { text: "60%", correct: false },
          { text: "95%", correct: false },
          { text: "80%", correct: true },
          { text: "50%", correct: false },
        ],
      },
    
    
    {
        question: "An 8-year-old boy presents with fever, headache and a diffuse pruritic, vesicular rash which is most prominent on the face and chest. A classmate at his school had chickenpox a few weeks ago. When is the rash of chickenpox deemed not contagious?",
        answers: [
          { text: " 4 days after the appearance of lesions", correct: false },
          { text: " 7 days after the appearance of lesions", correct: false },
          { text: "14 days after the appearance of lesions", correct: false },
          { text: "After crust formation over lesions", correct: true },
        ],
      },
    
    
     {
        question: "The disease caused by latent infection with varicella-zoster virus is _",
        answers: [
          { text: "Shingles", correct: true },
          { text: "Chickenpox", correct: false },
          { text: "Secondary pox", correct: false },
          { text: "Cowpox", correct: false },
        ],
      },
    
    {
        question: "Which of the following intrauterine infections is associated with limb reduction defects and scarring of skin?",
        answers: [
          { text: "Varicella virus", correct: true },
          { text: "Herpes virus", correct: false },
          { text: "Cytomegalovirus", correct: false },
          { text: "Syphilis", correct: false },
        ],
      },
    
    
    {
        question: "A child is presented to the OPD with fever and rash on cheeks, as shown in the image. Which of the following is true regarding the following condition?",
        answers: [
          { text: "It is also Known as sixth disease", correct: false },
          { text: "Child will be toxic and lethargic on presentation.", correct: false },
          { text: "It is associated with a transient arrest of erythropoiesis", correct: true },
          { text: "All of tile above", correct: false },
        ],
      },
    
    
     {
        question: "Which of the following statements is false regarding roseola infantum?",
        answers: [
          { text: "It is also called as erythema subitum.", correct: true },
          { text: "Nagayama spots are commonly seen", correct: false },
          { text: "It is caused by human herpes virus-", correct: false },
          { text: "It is a non-pruritic, morbilliform rash on the trunk.", correct: false },
        ],
      },
    
    {
        question: "A 10-year-old boy presents with fever, acute lymphadenopathy, and atypical lymphocytosis. What is the most probable diagnosis?",
        answers: [
          { text: "Infectious mononucleosis", correct: true },
          { text: "Kimura disease", correct: false },
          { text: "Tuberculosis", correct: false },
          { text: "Acute lymphoblastic leukemia", correct: false },
        ],
      },
    
    
    {
        question: "The most common cause of neonatal diarrhoea worldwide is. _",
        answers: [
          { text: "Rotavirus", correct: true },
          { text: "Entamoeba histolytica", correct: false },
          { text: "Norwalk virus", correct: false },
          { text: "Cholera", correct: false },
        ],
      },
    
    
    
     {
        question: "Hepatitis B infection is acquired by the fetus by which of the following ways?",
        answers: [
          { text: "Transplacental", correct: false },
          { text: "Perinatal", correct: false },
          { text: "Amniocentesis", correct: false },
          { text: "All of the above", correct: true },
        ],
      },
    
    {
        question: "A 3-year-old male has the following buccal mucosa finding. After three days, he presents to your OPD with a rash. What is your diagnosis?",
        answers: [
          { text: "Measles", correct: true },
          { text: "Leukoplakia", correct: false },
          { text: "Scarlet fever", correct: false },
          { text: "Kawasaki disease", correct: false },
        ],
      },
    
    
    {
        question: "All of the following are caused by Staphylococcus aureus except __",
        answers: [
          { text: "Bullous impetigo", correct: false },
          { text: "Furuncle", correct: false },
          { text: "Acute pharyngitis", correct: true },
          { text: "Pyomyositis", correct: false },
        ],
      },
    
    
     {
        question: "Which of the following toxins is responsible for causing scarlet fever?",
        answers: [
          { text: "Pyrogenic exotoxin", correct: true },
          { text: "Exfoliotoxin", correct: false },
          { text: "Enterotoxin", correct: false },
          { text: "Panton-Valentine leukocidin", correct: false },
        ],
      },
    
    {
        question: "PANDAS, a pediatric neuropsychiatric disorder, is associated with ____ infection.",
        answers: [
          { text: "Staphylococcus aureus", correct: false },
          { text: "Streptococcus pneumoniae", correct: false },
          { text: "Streptococcus pyogenes", correct: true },
          { text: "Staphylococcus epidermidis", correct: false },
        ],
      },
    
    
    {
        question: "A 10-year-old girl presents with a 2-day history of fever and sore joints. Further questioning reveals that she had a sore throat 3 weeks back for which she did not seek medical help. Which of the following is not a component of Jones criteria for the diagnosis of acute rheumatic fever?",
        answers: [
          { text: "Prolonged PR interval", correct: false },
          { text: "Erythema nodosum", correct: true },
          { text: "Arthralgia", correct: false },
          { text: "CRP ≥3.0 mg/dL", correct: false },
        ],
      },
    
    
     {
        question: "Which of the following is not a component of Hutchinson's triad in congenital syphilis?",
        answers: [
          { text: "Peg-shaped upper incisor", correct: false },
          { text: "Interstitial keratitis", correct: false },
          { text: "Sensorineural deafness", correct: false },
          { text: "Saber shin", correct: true },
        ],
      },
    
    {
        question: "Which of the following conditions can present as a painless swelling of the knee joint?",
        answers: [
          { text: "Congenital syphilis", correct: true },
          { text: "Septic arthritis", correct: false },
          { text: "Rheumatoid arthritis", correct: false },
          { text: "All of the above", correct: false },
        ],
      },
    
    
    {
        question: "The most important organ involved in congenital tuberculosis is the ____",
        answers: [
          { text: "Lung", correct: false },
          { text: "Liver", correct: true },
          { text: "Abdomen", correct: false },
          { text: "Kidney", correct: false },
        ],
      },
    
    
     {
        question: "Which of the following statements is false regarding pediatric tuberculosis (TB)?",
        answers: [
          { text: "Puhl's lesion is TB affecting the base of the lung.", correct: true },
          { text: "Most cases of pediatric TB are asymptomatic.", correct: false },
          { text: "Sputum smear-negative TB does not rule out pediatric pulmonary TB", correct: false },
          { text: "The most common site of extrapulmonary TB is the lymph node.", correct: false },
        ],
      },
    
    {
        question: "Which of the following is a major criterion in the revised Jones criteria used for the diagnosis of acute rheumatic fever in high-risk populations?",
        answers: [
          { text: "Polyarthralgia", correct: true },
          { text: "Fever (≥380C/100.40F)", correct: false },
          { text: "ESR≥30mm", correct: false },
          { text: "CRP ≥3.0 mg/dl", correct: false },
        ],
      },
    
    
    {
        question: "A 24-year-old woman with active tuberculosis on anti-tubercular therapy (ATT) delivered a healthy male baby at term. How is the newborn managed in this case? ",
        answers: [
          { text: "BCG +Rifampicin+ INH + Breast feeding", correct: false },
          { text: "BCG + Isolation of baby", correct: false },
          { text: "BCG + INH for 6 months+ Breast feeding", correct: true },
          { text: "BCG + INH + withhold Breastfeeding", correct: false },
        ],
      },
    
    
     {
        question: "Which of the following is false regarding neonatal tetanus?",
        answers: [
          { text: "Presents in first 2 days of life", correct: true },
          { text: "Caused by Clostridium tetani", correct: false },
          { text: "Presents with difficulty in feeding", correct: false },
          { text: "Case fatality rate is 70-100%", correct: false },
        ],
      },
    
    {
        question: "Which of the following is true regarding diphtheria?",
        answers: [
          { text: "It can be diagnosed by the demonstration of antibody by ELISA", correct: false },
          { text: "Immunization prevents the carrier state.", correct: false },
          { text: "Treatment of contacts is not indicated", correct: false },
          { text: "Iron has a critical value in the production of toxins", correct: true },
        ],
      },
    
    
    {
        question: "Investigation of choice of diphtheria carrier is __",
        answers: [
          { text: "Throat swab culture", correct: true },
          { text: "Gram's stain", correct: false },
          { text: "Albert's stain", correct: false },
          { text: "Fluorescent antibody", correct: false },
        ],
      },
    
    
     {
        question: "A 10-year-old boy presented with abdominal pain, diarrhoea and tenesmus for 4 months. The symptoms were accompanied by rectal prolapse and anoscopy demonstrated worms on the visualisation of the rectum. Infection with which of the following helminths is most likely?",
        answers: [
          { text: "Trichinella spiralis", correct: false },
          { text: "Enterobius vermicularis", correct: false },
          { text: "Trichuris trichura", correct: true },
          { text: "Ascaris lumbricoides", correct: false },
        ],
      },
    
    {
        question: "An anxious mother brought her 4-year-old daughter to the pediatrician. The girl was passing loose, bulky stools for the past 20 days. This was often associated with pain in abdomen. The pediatrician ordered stool examination, which showed the following organisms. Identity the organism?",
        answers: [
          { text: "Entamoeba histolytica", correct: false },
          { text: "Giardia lamblia", correct: true },
          { text: "Cryptosporidium", correct: false },
          { text: "Tropheryma whipplei", correct: false },
        ],
      },
    
    
    {
        question: "In a child, amoebic liver abscess can be diagnosed by demonstrating __",
        answers: [
          { text: "Cysts in the sterile pus", correct: false },
          { text: "Trophozites in the pus", correct: true },
          { text: "Cysts in the hepatic venous sample", correct: false },
          { text: "Trophozites in the feces", correct: false },
        ],
      },
    
    
     {
        question: "Which of the following is false regarding congenital toxoplasmosis?",
        answers: [
          { text: "It occurs through hematogenous dissemination to the placenta.", correct: false },
          { text: "Cerebral calcifications can be seen", correct: false },
          { text: "Immunoglobulin G (lgG) is diagnostic", correct: true },
          { text: " It manifests as hydrops fetalis", correct: false },
        ],
      },
    
    {
        question: "Which is the most common route by which the larva of Ancylostoma duodenale enters the human body? ",
        answers: [
          { text: "Ingestion of infected food items", correct: false },
          { text: "Inhalation of droplets", correct: false },
          { text: "Penetration of skin", correct: true },
          { text: "Inoculation into eroded skin", correct: false },
        ],
      },
    
    
    {
        question: "A child from Bihar comes with fever. Blood examination shows sheathed microfilaria, as shown in the image. Identify the organism.",
        answers: [
          { text: "Brugia malayi", correct: true },
          { text: "wuchereia bancrofti", correct: false },
          { text: "Loa Loa", correct: false },
          { text: "Oncocerca vovulous", correct: false },
        ],
      },
    
    
     {
        question: "A child presents with dietary habit of having uncooked pork and seizures. What is the organism responsible?",
        answers: [
          { text: "Trichuris trichura", correct: false },
          { text: "Taenia solium", correct: true },
          { text: "Echinococcus", correct: false },
          { text: "Taenia saginata", correct: false },
        ],
      },
    
    {
        question: "A 4-year-old girl presented with a sore throat and an acute onset of generalised erythematous rash with pastia lines over the antecubital fossa. What is the most likely diagnosis? ",
        answers: [
          { text: "Ritter's disease", correct: false },
          { text: "Scarlet fever", correct: true },
          { text: "Kawasaki disease", correct: false },
          { text: "Urticaria pigmentosa", correct: false },
        ],
      },
    
    
    {
        question: "What is the daily dosage of ethambutol for an adolescent of age 14 years?",
        answers: [
          { text: "20 mg/kg", correct: true },
          { text: "10 mg/kg", correct: false },
          { text: "40 mg/kg", correct: false },
          { text: "30 mg/kg", correct: false },
        ],
      },
    
    
    
     {
        question: "The most common manifestation of congenital toxoplasmosis is __",
        answers: [
          { text: "Hydrocephalus", correct: false },
          { text: "Chorioretinitis", correct: true },
          { text: "Hepatosplenomegaly", correct: false },
          { text: "Thrombocytopenia", correct: false },
        ],
      },
    
    {
        question: "Maternal antibodies that do not provide significant immunity in a neonate:",
        answers: [
          { text: "Tetanus", correct: false },
          { text: "Polio", correct: true },
          { text: "Diphtheria", correct: false },
          { text: "Measles", correct: false },
        ],
      },
    
    
    {
        question: "A 5-year-old child was diagnosed with diphtheria. His 3-year-old brother who lives in the same house has received vaccination against diphtheria about 22 months back. What should be done next?",
        answers: [
          { text: "One booster dose", correct: false },
          { text: "Nothing as the child is already exposed", correct: false },
          { text: "Erythromycin + diphtheria toxoid", correct: false },
          { text: "Erythromycin only", correct: true },
        ],
      },
    
    
     {
        question: "Hutchinson triad refers to:",
        answers: [
          { text: "Interstitial keratitis, 8th nerve deafness Mulberry molars", correct: false },
          { text: "Interstitial keratitis, 8th nerve deafness, Hutchinson molars", correct: false },
          { text: "Interstitial keratitis, 8th nerve deafness, Mulberry incisors", correct: false },
          { text: "Interstitial keratitis, 8th nerve deafness, Hutchinson incisors", correct: true },
        ],
      },
    
    {
        question: "Which of the following is false regarding paralysis due to polio virus infection?",
        answers: [
          { text: "It is an upper motor neuron type.", correct: true },
          { text: "It is asymmetrical", correct: false },
          { text: "It is more severe if strenuous physical exercise occurred during the onset of paralysis.", correct: false },
          { text: "It may be caused by polio vaccination", correct: false },
        ],
      },
    
    
    {
        question: "Most of the outbreaks of paralytic polio are caused by ____.",
        answers: [
          { text: "Type 1 virus", correct: true },
          { text: "Type 2 virus", correct: false },
          { text: "Type 3 virus", correct: false },
          { text: "Any of the above", correct: false },
        ],
      },
    
    
     {
        question: "Which of the following signs may be seen in a child with polio?",
        answers: [
          { text: "Tripod sign", correct: false },
          { text: "Kiss the knee sign", correct: false },
          { text: "Head drop sign", correct: false },
          { text: "All of the above", correct: true },
        ],
      },
    
    {
        question: "In which of the following age groups is acute flaccid paralysis surveillance done?",
        answers: [
          { text: "0-3 years", correct: false },
          { text: "0-5 years", correct: false },
          { text: "0-15 years", correct: true },
          { text: "0-25 years", correct: false },
        ],
      },
    
    
    {
        question: "When was India declared polio free?",
        answers: [
          { text: "March 2014", correct: true },
          { text: "April2016", correct: false },
          { text: "November 2012", correct: false },
          { text: "January 2011", correct: false },
        ],
      },
    
    
     {
        question: "Which of the following is a component of Polio Eradication and Endgame Strategic Plan, 2013-2018 (WHO)?",
        answers: [
          { text: "Phased removal of oral polio vaccines is not required, as they are safe.", correct: false },
          { text: "Switch from trivalent OPV to bivalent OPV", correct: true },
          { text: "After wild poliovirus have been eradicated, OPV has to be continued", correct: false },
          { text: "All of the above", correct: false },
        ],
      },
    
    {
        question: "Which of the following is true regarding vaccine-associated paralytic polio (VAPP)?",
        answers: [
          { text: "It occurs mostly after the first dose of oral polio vaccine.", correct: true },
          { text: "It is more likely to occur if the first dose was parenteral inactivated polio vaccine.", correct: false },
          { text: "It is most likely to occur if given on the same day as yellow fever vaccine.", correct: false },
          { text: "It is more likely to occur if multiple parenteral injections have been given at the same time.", correct: false },
        ],
      },
    
    
    {
        question: "Kenny packs are used in the treatment of __.",
        answers: [
          { text: "Poliomyelitis", correct: true },
          { text: "Muscular dystrophy", correct: false },
          { text: "Polyneuropathies", correct: false },
          { text: "Nerve injury", correct: false },
        ],
      },
    
    
    
     {
        question: "The most common cause of HIV infection in the newborn is ___ _",
        answers: [
          { text: "Perinatal transmission", correct: true },
          { text: "Breast milk", correct: false },
          { text: "Transplacental", correct: false },
          { text: "Exchange transfusion with infected blood", correct: false },
        ],
      },
    
    {
        question: "The most characteristic finding of HIV in children is __.",
        answers: [
          { text: "Gastrointestinal infections", correct: false },
          { text: "Persistent lymphadenopathy", correct: false },
          { text: "Chronic cough", correct: false },
          { text: "Failure to thrive", correct: true },
        ],
      },
    
    
    {
        question: "A 2-year-old boy born to an HIV positive mother presented with generalised lymphadenopathy since the last 3 months. He had no other findings. What is the clinical stage of AIDS in this child?",
        answers: [
          { text: "Stage 3", correct: false },
          { text: "Stage 4", correct: false },
          { text: "Stage 1", correct: true },
          { text: "Stage 2", correct: false },
        ],
      },
    
    
     {
        question: "A 28-year-old woman presents for antenatal care at 8 weeks of gestation. Routine screening revealed she was HIV-positive. Which of the following methods do not prevent the perinatal transmission of HIV?",
        answers: [
          { text: "Elective cesarean section", correct: false },
          { text: "Avoiding breastfeeding", correct: false },
          { text: "Administration of zidovudine to baby and mother", correct: false },
          { text: "Vaginal cleansing before delivery", correct: true },
        ],
      },
    
    {
        question: "Which syndrome is characterized by an increased inflammatory response to subclinical opportunistic infection after appropriate antiretroviral therapy?",
        answers: [
          { text: "AIDS related inflammatory syndrome", correct: false },
          { text: "Immune reconstitution inflammatory syndrome", correct: true },
          { text: "HIV related hyper reactivity syndrome", correct: false },
          { text: "CD4 responsive inflammatory syndrome", correct: false },
        ],
      },
    
    
    {
        question: "Which of the following is an indication to start ART in children, as per the WHO?",
        answers: [
          { text: "<11 months infant of CD4 count < 1.500 cells/mm3", correct: false },
          { text: "12-35 months if CD4 count <500 cells/mm3", correct: false },
          { text: "36-59 months if CD4 count <350 cells/mm3", correct: false },
          { text: "Any child with HIV", correct: true },
        ],
      },
    
    
     {
        question: "An infant born to an HIV-positive mother at term was found to have a positive  HIV DNA PCR test. At 6 weeks, the CD4 counts were 13%. Which of the following vaccines is not recommended in this child? ",
        answers: [
          { text: "OPV", correct: true },
          { text: "Hepatitis A", correct: false },
          { text: "Pneumococcal", correct: false },
          { text: "Influenza", correct: false },
        ],
      },
    
    {
        question: "Which of the following is a feature of United Nations Programme on HIV & AIDS (UNAIDS) 90-90-90? ",
        answers: [
          { text: "90% of people living with HIV should know their HIV status", correct: false },
          { text: "90% of all people with diagnosed HIV should receive sustained antiretroviral therapy", correct: false },
          { text: "90% of all people receiving antiretroviral therapy should have viral suppression", correct: false },
          { text: "All of the above", correct: true },
        ],
      },
    
    
    {
        question: "The image given below depicts the mode of infection with which of the following organisms? ",
        answers: [
          { text: "Campylobacter jejuni", correct: false },
          { text: "Hepatitis A", correct: false },
          { text: "Polio", correct: true },
          { text: "Rota virus", correct: false },
        ],
      },
    
    
     {
        question: "Hand, knee gait in polio paralysis is due to weakness of the ____ _",
        answers: [
          { text: "Gluteus medius", correct: false },
          { text: "Quadriceps", correct: true },
          { text: "Gastro-soleus", correct: false },
          { text: "Gluteus maximus", correct: false },
        ],
      },
    
    {
        question: "The most common malignancy in children is __",
        answers: [
          { text: "Neuroblastoma", correct: false },
          { text: "Astrocytoma", correct: false },
          { text: "Acute lymphoblastic leukemia", correct: true },
          { text: "Acute myeloid leukemia", correct: false },
        ],
      },
    
    
    {
        question: "Which of the following is false about childhood malignancies?",
        answers: [
          { text: "ALL is the most common type of leukemia in children with Down syndrome.", correct: false },
          { text: "The most common intra-abdominal malignancy is Wilm's tumor.", correct: true },
          { text: "The most common extracranial solid malignancy is neuroblastoma.", correct: false },
          { text: "The most common brain tumors in children are infratentorial.", correct: false },
        ],
      },
    
    
    
     {
        question: "The most common leukemia in children with Down syndrome is __ _",
        answers: [
          { text: "Acute myeloid leukemia", correct: false },
          { text: "Acute lymphoblastic leukemia", correct: true },
          { text: "Chronic myeloid leukemia", correct: false },
          { text: "Chronic lymphoid leukemia", correct: false },
        ],
      },
    
    {
        question: "Sanctuary sites of acute lymphoblastic leukemia are __",
        answers: [
          { text: "Central nervous system", correct: false },
          { text: "Testis", correct: false },
          { text: "Both A and B", correct: true },
          { text: "None of the above", correct: false },
        ],
      },
    
    
    {
        question: "The most common type of acute lymphoblastic leukemia (ALL) in children is",
        answers: [
          { text: "B-lymphoblastic leukemia", correct: true },
          { text: "Mature B-cell leukemia", correct: false },
          { text: "T-lymphoblastic leukemia", correct: false },
          { text: "Mature T-cell ALL", correct: false },
        ],
      },
    
    
     {
        question: "Acute lymphoblastic leukemia is associated with which of the following conditions?",
        answers: [
          { text: "Pernicious anemia", correct: false },
          { text: "Fanconi anemia", correct: true },
          { text: "Autoimmune hemolytic anemia", correct: false },
          { text: "All of the above", correct: false },
        ],
      },
    
    {
        question: "A 4-year-old boy presents with pancytopenia and hepatosplenomegaly. Bony tenderness is also present. He is most likely suffering from the following type of ALL ",
        answers: [
          { text: "B cell", correct: true },
          { text: "T cell", correct: false },
          { text: "Both B and T cell", correct: false },
          { text: "None of the above", correct: false },
        ],
      },
    
    
    {
        question: "The cut-off percentage of blast cells required for the diagnosis of acute lymphoblastic leukemia (ALL) on bone marrow biopsy is ___",
        answers: [
          { text: "15", correct: false },
          { text: "10", correct: false },
          { text: "25", correct: true },
          { text: "20", correct: false },
        ],
      },
    
    
     {
        question: "The following parameter in ALL indicates a poor prognosis _",
        answers: [
          { text: "Age >10 years", correct: true },
          { text: "leukocyte count< 50,000/µL", correct: false },
          { text: "Hyperdiploidy", correct: false },
          { text: "Trisomy of chromosomes 4, 10, and 17", correct: false },
        ],
      },
    
    {
        question: "A 14-year-old boy presents with features of superior vena cava obstruction. Chest X-ray image shows superior mediastinal widening. Which of the following is the most likely diagnosis?",
        answers: [
          { text: "B-cell acute lymphoblastic leukemia", correct: false },
          { text: "T-cell acute lymphoblastic leukemia", correct: true },
          { text: "Chronic myeloid leukemia", correct: false },
          { text: "Chronic lymphocytic leukemia", correct: false },
        ],
      },
    
    
    {
        question: "Which of the following is most commonly seen in infantile leukemia?",
        answers: [
          { text: "t(11, 14)", correct: false },
          { text: "t (4, 11)", correct: true },
          { text: "t (12,21)", correct: false },
          { text: "t (15,21 )", correct: false },
        ],
      },
    
    
     {
        question: "A 4-year-old girl presented with fever, lethargy and bruising. She was investigated thoroughly and was diagnosed to have acute lymphoid leukemia. Which of the following drugs can be used to treat her?",
        answers: [
          { text: "Imatinib", correct: false },
          { text: "L-asparaginase", correct: true },
          { text: "Tretinoin", correct: false },
          { text: "Cladribine", correct: false },
        ],
      },
    
    {
        question: "Diagnosis in AML is confirmed by the presence of more than_% blast cells in bone marrow biopsy.",
        answers: [
          { text: "10", correct: false },
          { text: "20", correct: true },
          { text: "25", correct: false },
          { text: "30", correct: false },
        ],
      },
    
    
    {
        question: "A child with a diagnosis of acute myeloid leukaemia underwent immunophenotyping and molecular studies. Which of the following is associated with a poor prognosis?",
        answers: [
          { text: "t(8;21 )", correct: false },
          { text: "t(15;17)", correct: false },
          { text: "inv 16", correct: false },
          { text: "Monosomy 7", correct: true },
        ],
      },
    
    
    
     {
        question: "A 1-month-old infant with trisomy 21 presented with a variant of AML, which was found to be due to a GATA-1 mutation. The infant had no life-threatening complications. The ideal treatment modality is __ _",
        answers: [
          { text: "Chemotherapy", correct: false },
          { text: "Radiotherapy", correct: false },
          { text: "Bone marrow transplant", correct: false },
          { text: "None of the above", correct: true },
        ],
      },
    
    {
        question: "In which type of AML is chloroma most commonly seen?",
        answers: [
          { text: "AMLM2", correct: true },
          { text: "AMLM3", correct: false },
          { text: "AMLM7", correct: false },
          { text: "AMLM1", correct: false },
        ],
      },
    
    
    {
        question: "Erythemic myelosis is __ _",
        answers: [
          { text: "AMLM2", correct: false },
          { text: "AMLM5", correct: false },
          { text: "AMLM7", correct: false },
          { text: "AMLM6", correct: true },
        ],
      },
    
    
     {
        question: "Juvenile chronic myeloid leukemia (CML) is characterized by all except. __",
        answers: [
          { text: "Affects children younger than 2 years of age", correct: false },
          { text: "Philadelphia chromosome", correct: true },
          { text: "Nucleated red blood cells", correct: false },
          { text: "Can be seen in neurofibromatosis type 1", correct: false },
        ],
      },
    
    {
        question: "Which of the following is used in the staging of childhood non-Hodgkins lymphoma?",
        answers: [
          { text: "Ann-Arbor staging", correct: false },
          { text: "Binet staging", correct: false },
          { text: "St Jude staging", correct: true },
          { text: "RAI staging", correct: false },
        ],
      },
    
    
    {
        question: "The non-Hodgkin's lymphoma in the pediatric age group is __",
        answers: [
          { text: "Dominantly nodal", correct: false },
          { text: "High grade and aggressive", correct: true },
          { text: "Has variable growth fraction", correct: false },
          { text: "Has poor outcome", correct: false },
        ],
      },
    
    
     {
        question: "The most common non-Hodgkin's lymphoma in children is --",
        answers: [
          { text: "B-cell acute lymphoblastic leukemia (B- ALL)", correct: false },
          { text: "Mantle cell lymphoma", correct: false },
          { text: "Diffuse large B-cell lymphoma (DLBCL)", correct: false },
          { text: "Burkitt lymphoma", correct: true },
        ],
      },
    
    {
        question: "Lymph node biopsy of a 9-year-old child with cervical lymphadenopathy showed the following picture. The diagnosis is __",
        answers: [
          { text: "Burkitt Lymphoma", correct: false },
          { text: "Hodgkin's disease", correct: true },
          { text: "Acute lymphoblastic leukemia", correct: false },
          { text: "Chloroma", correct: false },
        ],
      },
    
    
    {
        question: "According to Ann Arbor staging, Hodgkin's lymphoma which involves lymph nodes both above and below the diaphragm is classified as stage __",
        answers: [
          { text: "1", correct: false },
          { text: "2", correct: false },
          { text: "3", correct: true },
          { text: "4", correct: false },
        ],
      },
    
    
     {
        question: "The second most common malignancy in children is _ _",
        answers: [
          { text: "ALL", correct: false },
          { text: "Brain tumor", correct: true },
          { text: "Neuroblastoma", correct: false },
          { text: "Wilms tumor", correct: false },
        ],
      },
    
    {
        question: "A supratentorial tumor causing macrocephaly in an infant is _ _",
        answers: [
          { text: "Medulloblastoma", correct: false },
          { text: "Pontine glioma", correct: false },
          { text: "Ependymoma", correct: false },
          { text: "Choroid plexus carcinoma", correct: true },
        ],
      },
    
    
    {
        question: "The most common site of an ependymoma in pediatric age group is __ _",
        answers: [
          { text: "Filum terminale", correct: false },
          { text: "Pia mater", correct: false },
          { text: "Floor of 4th ventricle", correct: true },
          { text: "Cerebellopontine angle", correct: false },
        ],
      },
    
    
    
     {
        question: "A 5-year-old girl presents with nocturnal headache, vomiting, and difficulty walking. On examination, ataxia is present. Over the course of a few weeks, she develops multiple cranial nerve palsy. Imaging is suggestive of a brainstem tumor. What is the diagnosis?",
        answers: [
          { text: "Pontine glioma", correct: true },
          { text: "Medulloblastoma", correct: false },
          { text: "Ependymoma", correct: false },
          { text: "Acoustic neuroma", correct: false },
        ],
      },
    
    {
        question: "____is a pediatric brain tumor presenting with a combination of solid and cystic components on imaging. Biopsy shows Rosenthal fibers.",
        answers: [
          { text: "Medulloblastoma", correct: false },
          { text: "Ependymoma", correct: false },
          { text: "Choroid plexus carcinoma", correct: false },
          { text: "Pilocytic astrocytoma", correct: true },
        ],
      },
    
    
    {
        question: "Pilomyxoid astrocytoma falls under ___ WHO grade.",
        answers: [
          { text: "Grade I", correct: false },
          { text: "Grade II", correct: true },
          { text: "Grade III", correct: false },
          { text: "Grade IV", correct: false },
        ],
      },
    
    
     {
        question: "Histopathology of a tumour affecting the midline vermis showed small round blue cells and Homer-Wright rosettes. Identify the lesion.",
        answers: [
          { text: "Medulloblastoma", correct: true },
          { text: "Ependymoma", correct: false },
          { text: "Pilocytic astrocytoma", correct: false },
          { text: "Pontine glioma", correct: false },
        ],
      },
    
    {
        question: "One of the histological features of ependymomas is the presence of __ _",
        answers: [
          { text: "Rosenthal fibres", correct: false },
          { text: "Perivascular pseudorosettes", correct: true },
          { text: "Flexner-Wintersteiner rosettes", correct: false },
          { text: "Homer-Wright rosettes", correct: false },
        ],
      },
    
    
    {
        question: "A child presented with seizure complaints. On CT scan, a calcified cortical mass is seen. What is the diagnosis?",
        answers: [
          { text: "Astrocytoma", correct: false },
          { text: "Medulloblastoma", correct: false },
          { text: "Oligodendroglioma", correct: true },
          { text: "Craniopharyngioma", correct: false },
        ],
      },
    
    
     {
        question: "An erythropoietin-secreting brain tumor is detected in a child. His father passed away one year back due to renal cell carcinoma secondary to von Hippel-Lindau syndrome. On examination, a fiery red retina is seen. What is the most likely tumour in this child?",
        answers: [
          { text: "Schwannoma", correct: false },
          { text: "Cerebellar hemangioblastoma", correct: true },
          { text: "Cavernous hemangioma", correct: false },
          { text: "Neuroblastoma", correct: false },
        ],
      },
    
    {
        question: "The term trilateral retinoblastoma refers to bilateral retinoblastoma +",
        answers: [
          { text: "Osteosarcoma", correct: false },
          { text: "Pineoblastoma", correct: true },
          { text: "Rhabdomyosarcoma", correct: false },
          { text: "Malignant melanoma", correct: false },
        ],
      },
    
    
    {
        question: "Which of the following is not a feature of Parinaud's syndrome?",
        answers: [
          { text: "Seen in cases of pineal region tumors", correct: false },
          { text: "Paresis of upward gaze", correct: false },
          { text: "Convergence retraction nystagmus on attempted upgaze", correct: false },
          { text: "Infranuclear vertical gaze disorder", correct: true },
        ],
      },
    
    
     {
        question: "An 8-year-old child presents with the bitemporal hemianopia. An intracranial space- occupying lesion is suspected. Biopsy shows cholesterol-rich machinery-oil-like fluid.What is the most likely diagnosis?",
        answers: [
          { text: "Prolactinoma", correct: false },
          { text: "Adamantinomatous craniopharyngioma", correct: true },
          { text: "Ependymoma", correct: false },
          { text: "Meningioma", correct: false },
        ],
      },
    
    {
        question: "A child is diagnosed to have a brain tumour. In which of the following conditions should you do a lumbar puncture for cytological analysis?",
        answers: [
          { text: "Infratentorial tumours", correct: false },
          { text: "Hydrocephalus", correct: false },
          { text: "Supratentorial tumors with midline shift", correct: false },
          { text: "Germ-cell tumours", correct: true },
        ],
      },
    
    
    {
        question: "Vestibular schwannomas, meningiomas, and spinal cord ependymomas are CNS manifestations of ------",
        answers: [
          { text: "Neurofibromatosis type 1", correct: false },
          { text: "Neurofibromatosis type 2", correct: true },
          { text: "Von Hippel-Lindau syndrome", correct: false },
          { text: "Turcot syndrome", correct: false },
        ],
      },
    
    
     {
        question: "Neurofibromatosis type 1 arises due to mutation in chromosome __ _",
        answers: [
          { text: "7", correct: false },
          { text: "17", correct: true },
          { text: "22", correct: false },
          { text: "11", correct: false },
        ],
      },
    
    {
        question: "A 12-year-old boy presented with focal seizures of only the right side of his body. On investigations, a subependymal giant cell astrocytoma is found. Which of the following syndromes is most likely to be associated with it?",
        answers: [
          { text: "Neurofibromatosis type 1", correct: false },
          { text: "Neurofibromatosis type 2", correct: false },
          { text: "Tuberous sclerosis", correct: true },
          { text: "Turcot syndrome", correct: false },
        ],
      },
    
    
    {
        question: "Which of the following pediatric tumors is called a triphasic blastoma?",
        answers: [
          { text: "Hepatoblastoma", correct: false },
          { text: "Neuroblastoma", correct: false },
          { text: "Medulloblastoma", correct: false },
          { text: "Nephroblastoma", correct: true },
        ],
      },
    
    
     {
        question: "The precursor lesion of Wilm's tumor is __ _",
        answers: [
          { text: "Nephroblasts", correct: false },
          { text: "Embryonic nephrogenic rests", correct: true },
          { text: "Medullary cysts", correct: false },
          { text: "Cortical cysts", correct: false },
        ],
      },
    
    {
        question: "A 5-year-old boy presented with an abdominal mass. On examination, the mass is firm, smooth, non-tender, and does not cross the mid-line. The boy is also found to have moderate hypertension. Urinalysis reveals microscopic haematuria. A diagnosis of Wilms tumour is made. This condition can be associated with all of the following except",
        answers: [
          { text: "Aniridia", correct: false },
          { text: "Beckwith syndrome", correct: false },
          { text: "Polycystic kidney", correct: true },
          { text: "Hemi-hypertrophy", correct: false },
        ],
      },
    
    
    {
        question: "A child underwent biopsy and staging for Wilms tumour. A tumour was detected on both kidneys. What is the stage of Wilms tumour in this child?",
        answers: [
          { text: "Stage 2", correct: false },
          { text: "Stage 3", correct: false },
          { text: "Stage 4", correct: false },
          { text: "Stage 5", correct: true },
        ],
      },
    
    
     {
        question: "Paraneoplastic syndromes of Wilms tumor include all except __ _",
        answers: [
          { text: "Hypertrophic primary osteoarthropathy", correct: true },
          { text: "Polycythemia", correct: false },
          { text: "Hypercalcemia", correct: false },
          { text: "Bleeding", correct: false },
        ],
      },
    
    {
        question: "Wilm's tumor most commonly metastatizes to the ___ _",
        answers: [
          { text: "Lung", correct: true },
          { text: "Brain", correct: false },
          { text: "Bone", correct: false },
          { text: "Adrenal", correct: false },
        ],
      },
    
    
    {
        question: "The most important determinant of prognosis in Wilm's tumor is __ _",
        answers: [
          { text: "Stage of disease", correct: false },
          { text: "Loss of heterozygosity of chromosome", correct: false },
          { text: "Histology", correct: true },
          { text: "Age< 1 year at presentation", correct: false },
        ],
      },
    
    
     {
        question: "The most common extracranial solid tumor in the pediatric age group is __ _",
        answers: [
          { text: "Juvenile pilocytic astrocytoma", correct: false },
          { text: "Chloroma", correct: false },
          { text: "Retinoblastoma", correct: false },
          { text: "Neuroblastoma", correct: true },
        ],
      },
    
    {
        question: "Tumor which may undergo spontaneous regression is __ _",
        answers: [
          { text: "Medulloblastoma", correct: false },
          { text: "Hepatoblastoma", correct: false },
          { text: "Neuroblastoma", correct: true },
          { text: "Nephroblastoma", correct: false },
        ],
      },
    
    
    {
        question: "A 5-year-old child presents with rapid dancing eye movements, rhythmic jerking of limbs and poor coordination. You suspect a paraneoplastic syndrome. Which of the following conditions should you look for in this child?",
        answers: [
          { text: "Cerebellar hemangioblastoma", correct: false },
          { text: "Neuroblastoma", correct: true },
          { text: "Medulloblastoma", correct: false },
          { text: "Pontine glioma", correct: false },
        ],
      },
    
    
    
     {
        question: "In which of the following conditions is the clinical picture shown in the below image seen? ",
        answers: [
          { text: "Retinoblastoma", correct: false },
          { text: "Neuroblastoma", correct: true },
          { text: "Acute leukemia", correct: false },
          { text: "Osteosarcoma", correct: false },
        ],
      },
    
    {
        question: "Which of the following is associated with a good outcome in neuroblastoma?",
        answers: [
          { text: "Hyperdiploidy", correct: true },
          { text: "Loss of heterozygosity of 11 q", correct: false },
          { text: "Gain of 17q", correct: false },
          { text: "N-myc amplification", correct: false },
        ],
      },
    
    
    {
        question: "The most common soft tissue sarcoma in the pediatric age group is ___ .",
        answers: [
          { text: "Retinoblastoma", correct: false },
          { text: "Rhabdomyosarcoma", correct: true },
          { text: "Malignant melanoma", correct: false },
          { text: "Cavernous hemangioma", correct: false },
        ],
      },
    
    
     {
        question: "A 4-year-old girl presents with the lesion shown in this picture. The diagnosis is _",
        answers: [
          { text: "Fibrosarcoma", correct: false },
          { text: "Sarcoma botryoides", correct: true },
          { text: "Leiomyosarcoma", correct: false },
          { text: "Inflammatory polyp", correct: false },
        ],
      },
    
    {
        question: "The most common intraocular tumor in pediatric age group is _ _",
        answers: [
          { text: "Retinoblastoma", correct: true },
          { text: "Rhabdomyosarcoma", correct: false },
          { text: "Malignant melanoma of choroid", correct: false },
          { text: "Basal cell carcinoma of eyelid", correct: false },
        ],
      },
    
    
    {
        question: "Most common secondary malignancy of retinoblastoma is ____ _",
        answers: [
          { text: "Osteosarcoma", correct: true },
          { text: "Pancreatic tumour", correct: false },
          { text: "Thyroid malignancy", correct: false },
          { text: "Hepatoblastoma", correct: false },
        ],
      },
    
    
     {
        question: "A 3-year-old boy presents with a 2-month history of an enlarging scalp lesion. There is no history of trauma to the head or scalp. The patient is otherwise healthy and investigations are normal. X-ray of the head is given below. What is the most likely diagnosis?",
        answers: [
          { text: "Multiple myeloma", correct: false },
          { text: "Langerhans cell histiocytosis", correct: true },
          { text: "Hairy cell leukaemia", correct: false },
          { text: "Neuroblastoma", correct: false },
        ],
      },
    
    {
        question: "The fetal adrenal gland production of which of the following is maximum?",
        answers: [
          { text: "DHEA", correct: true },
          { text: "Cortisol", correct: false },
          { text: "Corticosterone", correct: false },
          { text: "Progesterone", correct: false },
        ],
      },
    
    
    {
        question: "Which mode of inheritance does congenital adrenal hyperplasia follow?",
        answers: [
          { text: "Autosomal recessive", correct: true },
          { text: "Autosomal dominant", correct: false },
          { text: "X-linked recessive", correct: false },
          { text: "X-linked dominant", correct: false },
        ],
      },
    
    
     {
        question: "Enzyme deficiency most commonly causing congenital adrenal hyperplasia is",
        answers: [
          { text: "3β-Hydroxysteroid dehydrogenase deficiency", correct: false },
          { text: "17 -Hydroxylase deficiency", correct: false },
          { text: "11 β -Hydroxylase deficiency", correct: false },
          { text: "21 -Hydroxylase deficiency", correct: true },
        ],
      },
    
    {
        question: "Which among the following types of congenital adrenal hyperplasia is due to 21 · hydroxylase deficiency?",
        answers: [
          { text: "Salt-wasting type", correct: false },
          { text: "Simple virilising type", correct: false },
          { text: "Non-classic type", correct: false },
          { text: "All of the above", correct: true },
        ],
      },
    
    
    {
        question: "A 2-week-old infant with ambiguous genitalia (as shown in the picture) presents with an episode of dehydration and shock, requiring hospitalization. What is the electrolyte abnormality you would expect to see in this infant?",
        answers: [
          { text: "Hypokalemia", correct: false },
          { text: "Hyperkalemia", correct: true },
          { text: "Hypocalcemia", correct: false },
          { text: "Hypercalcemia", correct: false },
        ],
      },
    
    
    
     {
        question: "A 14-day-old infant with ambiguous genitalia is brought into hospital with vomiting and poor feeding. The infant is dehydrated and tachycardic with signs of shock. Electrolytes reveal hyponatraemia and hyperkalaemia. What is the investigation of choice to diagnose this condition?",
        answers: [
          { text: "21-Hydroxylase", correct: false },
          { text: "17 -Hydroxyprogesterone", correct: true },
          { text: "3β-Hydroxysteroid dehydrogenase", correct: false },
          { text: "11β-Hydroxylase", correct: false },
        ],
      },
    
    {
        question: "The drug used in the treatment of congenital adrenal hyperplasia in a child is ___ _",
        answers: [
          { text: "Dexamethasone", correct: false },
          { text: "Betamethasone", correct: false },
          { text: "Prednisolone", correct: false },
          { text: "Hydrocortisone", correct: true },
        ],
      },
    
    
    {
        question: "A woman has a previous child with congenital adrenal hyperplasia. In the present pregnancy, steroid therapy should be started __ _",
        answers: [
          { text: "As soon as pregnancy is diagnosed", correct: true },
          { text: "At 28 weeks of pregnancy", correct: false },
          { text: "Before conception", correct: false },
          { text: "After Karyotyping and determination of sex of the baby", correct: false },
        ],
      },
    
    
     {
        question: "Deficiency of P450 oxidoreductase results in ___",
        answers: [
          { text: "Antley Bixler syndrome", correct: true },
          { text: "Waterhouse-Friderichsen syndrome", correct: false },
          { text: "Nelson syndrome", correct: false },
          { text: "Lipoid adrenal hyperplasia", correct: false },
        ],
      },
    
    {
        question: "An 8-day-old male pseudohermaphrodite child with 46 XY karyotype presents with BP of 120/80 mmHg. The most likely enzyme deficiency is __ _",
        answers: [
          { text: "21-Hydroxylase", correct: false },
          { text: "11 β-Hydroxylase", correct: false },
          { text: "17-Hydroxylase", correct: true },
          { text: "3β-Hydroxysteroid dehydrogenase", correct: false },
        ],
      },
    
    
    {
        question: "Which of the following enzyme deficiency in congenital adrenal hyperplasia leads to the decreased synthesis of cortisol, aldosterone, and androstenedione?",
        answers: [
          { text: "3β-Hydroxysteroid dehydrogenase", correct: true },
          { text: "11β -Hydroxylase", correct: false },
          { text: "17-Hydroxylase", correct: false },
          { text: "21 -Hydroxylase", correct: false },
        ],
      },
    
    
     {
        question: "The most common enzyme deficiency leading to childhood hypertension among the following is __ _",
        answers: [
          { text: "17 -Hydroxylase deficiency", correct: false },
          { text: "21-Hydroxylase deficiency", correct: false },
          { text: "3β-Hydroxysteroid dehydrogenase", correct: false },
          { text: "11β-Hydroxylase deficiency", correct: true },
        ],
      },
    
    {
        question: "A 6-year-old boy presents with precocious puberty and blood pressure of 140/90 mmHg. The estimation of ---will help in diagnosis.",
        answers: [
          { text: "17-Hydroxy progesterone", correct: false },
          { text: "Cortisol", correct: false },
          { text: "Aldosterone", correct: false },
          { text: "11 Deoxycortisol", correct: true },
        ],
      },
    
    
    {
        question: "All of the following can cause precocious puberty in males except __ _",
        answers: [
          { text: "17-Hydroxylase deficiency", correct: true },
          { text: "21-Hydroxylase deficiency", correct: false },
          { text: "11 β-Hydroxylase Deficiency", correct: false },
          { text: "None of the above", correct: false },
        ],
      },
    
    
     {
        question: "Congenital adrenal hyperplasia most commonly presents as __ _",
        answers: [
          { text: "Male pseudohermaphroditism", correct: false },
          { text: "Female pseudohermaphroditism", correct: true },
          { text: "True hermaphroditism", correct: false },
          { text: "46, XY intersex", correct: false },
        ],
      },
    
    {
        question: "A 4-week-old female child with normal genitalia presented to the emergency department with severe dehydration and blood examination shows sodium level of 122 mE/L and potassium level of 6 mE/L. Which of the following measurements will be helpful in the diagnosis?",
        answers: [
          { text: "Aldosterone", correct: true },
          { text: "17-hydroxylase", correct: false },
          { text: "17 -hydroxyprogesterone", correct: false },
          { text: "Cortisol", correct: false },
        ],
      },
    
    
    {
        question: "A 12-year-old boy presents with obesity and short stature, with signs of abnormal masculinization as shown below. All of the following features are true regarding this condition except __ _",
        answers: [
          { text: "Most common cause is adrenocortical tumor", correct: true },
          { text: "Hypertension", correct: false },
          { text: "Hyperglycemia", correct: false },
          { text: "Osteoporosis", correct: false },
        ],
      },
    
    
    
     {
        question: "A 12-year-old girl presented with vague abdominal discomfort since 6 months with occasional diarrhoea. On examination, she had hyperpigmentation of buccal mucosa and gums. An ACTH stimulation test was suggestive of Addison’s disease. Which of the following will not be seen in this condition?",
        answers: [
          { text: "Hyponatremia", correct: false },
          { text: "Hypoglycemia", correct: false },
          { text: "Hypotension", correct: false },
          { text: "Hypertension", correct: true },
        ],
      },
    
    {
        question: "Which among the following is the most common infectious etiology for adrenal insufficiency in children?",
        answers: [
          { text: "Haemophilus influenzae", correct: false },
          { text: "Neisseria meningitidis", correct: true },
          { text: "Mycobacterium tuberculosis", correct: false },
          { text: "Corynebacterium diphtheriae", correct: false },
        ],
      },
    
    
    {
        question: "A 1-month-old infant diagnosed with primary adrenal insufficiency presented with failure to thrive, recurrent emesis, and hepatosplenomegaly. Bilateral adrenal calcification is noted radiologically. The most likely diagnosis is __ _",
        answers: [
          { text: "Pheochromocytoma", correct: false },
          { text: "Nelson's disease", correct: false },
          { text: "Wolman's disease", correct: true },
          { text: "Adrenal hemorrhage", correct: false },
        ],
      },
    
    
     {
        question: "Which of the following is the most common tumor associated with growth hormone deficiency in children?",
        answers: [
          { text: "Prolactinoma", correct: false },
          { text: "Craniopharyngioma", correct: true },
          { text: "Glioma", correct: false },
          { text: "Somatotropinoma", correct: false },
        ],
      },
    
    {
        question: "Characteristic features of growth hormone deficiency include all of the following except-----",
        answers: [
          { text: "Short stature at birth", correct: true },
          { text: "Symptomatic hypoglycaemia", correct: false },
          { text: "Normal intelligence", correct: false },
          { text: "Proportionate short stature", correct: false },
        ],
      },
    
    
    {
        question: "Which of the following is the most common genetic cause for multiple pituitary hormone deficiency?  ",
        answers: [
          { text: "Mutations of LHX3 gene", correct: false },
          { text: "Mutations of SOX3 gene", correct: false },
          { text: "Mutations of GLI2 gene", correct: false },
          { text: "Mutations of PROP1 gene", correct: true },
        ],
      },
    
    
     {
        question: "Laron syndrome is caused by ___",
        answers: [
          { text: "Deficiency of growth hormone", correct: false },
          { text: "Deficiency of insulin like growth factor-1 (IGF-1)", correct: false },
          { text: "End-organ resistance to growth hormone", correct: true },
          { text: "Mutation in growth hormone- releasing hormone receptor", correct: false },
        ],
      },
    
    {
        question: "Which among the following is an FDA-approved indication for growth hormone therapy to promote growth?",
        answers: [
          { text: "Laron dwarfism", correct: false },
          { text: "Congenital hypothyroidism", correct: false },
          { text: "Chronic kidney disease", correct: true },
          { text: "Maternal deprivation dwarfism", correct: false },
        ],
      },
    
    
    {
        question: "Chintu, a 5-year-old boy was brought by his parents as they were increasingly worried about his height. His height is well below 3 standard deviations from mean and growth velocity is suboptimal. Following investigations, he was found to have a growth hormone deficiency and is planned for treatment with recombinant human growth hormone (rhGH). All of the following are adverse effects related to rhGH therapy except",
        answers: [
          { text: "Type 1 diabetes mellitus", correct: true },
          { text: "Pseudotumor cerebri", correct: false },
          { text: "Slipped capital femoral epiphysis", correct: false },
          { text: "Worsening of scoliosis", correct: false },
        ],
      },
    
    
     {
        question: "In which of the hypothalamic nuclei do lesions cause diabetes insipidus?",
        answers: [
          { text: "Dorsomedial nuclei", correct: false },
          { text: "Supraoptic and paraventricular nuclei", correct: true },
          { text: "Median preoptic nuclei", correct: false },
          { text: "Ventromedial nuclei", correct: false },
        ],
      },
    
    {
        question: "Which among the following is a congenital X-linked cause for diabetes insipidus?",
        answers: [
          { text: "Mutations of the aquaporin 2 gene", correct: false },
          { text: "Mutations of the vasopressin gene", correct: false },
          { text: "Mutations of the vasopressin V2 receptor", correct: true },
          { text: "Mutations of the AVP- NP11 gene", correct: false },
        ],
      },
    
    
    {
        question: "Which among the following is the most common primary brain tumors associated with diabetes Insipidus?",
        answers: [
          { text: "Craniopharyngiomas", correct: false },
          { text: "Germinomas", correct: true },
          { text: "Optic gliomas", correct: false },
          { text: "Prolactinoma", correct: false },
        ],
      },
    
    
    
     {
        question: "Which of the following is not a component of Wolfram syndrome?",
        answers: [
          { text: "Diabetes mellitus", correct: false },
          { text: "Nerve deafness", correct: false },
          { text: "Optic atrophy", correct: false },
          { text: "Syndrome of inappropriate ADH secretion", correct: true },
        ],
      },
    
    {
        question: "Sagar, a 4-year-old boy was brought in by his mother with complaints of polyuria and polydipsia since the last 4 months. He was admitted for evaluation and a water deprivation test confirmed the diagnosis of central diabetes insipidus. What is the drug of choice for treatment?",
        answers: [
          { text: "Leuprolide", correct: false },
          { text: "Thiazide diuretics", correct: false },
          { text: "Desmopressin", correct: true },
          { text: "Insulin", correct: false },
        ],
      },
    
    
    {
        question: "A 5-year-old boy was admitted to the hospital with complaints of bedwetting, increased thirst and increased urination for 1 year. His father is a known case of diabetes insipidus. A water deprivation test confirms the diagnosis of nephrogenic diabetes insipidus. The treatment includes all of the following except ____.",
        answers: [
          { text: "Thiazide diuretics", correct: false },
          { text: "High salt intake", correct: true },
          { text: "Amiloride", correct: false },
          { text: "Indomethacin", correct: false },
        ],
      },
    
    
     {
        question: "The most commonly diagnosed pituitary adenoma in childhood is__",
        answers: [
          { text: "Prolactinoma", correct: true },
          { text: "Corticotropinoma", correct: false },
          { text: "S0matotropinoma", correct: false },
          { text: "Thyrotropinoma", correct: false },
        ],
      },
    
    {
        question: "Weak giants are produced by ___",
        answers: [
          { text: "Thyroid adenomas", correct: false },
          { text: "Thyroid carcinomas", correct: false },
          { text: "Pituitary adenomas", correct: true },
          { text: "Parathyroid adenomas", correct: false },
        ],
      },
    
    
    {
        question: "All of the following are non-endocrine causes of tall stature in childhood except",
        answers: [
          { text: "Sotos syndrome", correct: false },
          { text: "McCune-Albright syndrome", correct: true },
          { text: "Fragile X syndrome", correct: false },
          { text: "Beckwith-Wiedemann syndrome", correct: false },
        ],
      },
    
    
     {
        question: "The most common preventable cause of mental retardation is __ _",
        answers: [
          { text: "Congenital Hypothyroidism", correct: true },
          { text: "Inborn errors of metabolism", correct: false },
          { text: "Congenital hyperthyroidism", correct: false },
          { text: "Down Syndrome", correct: false },
        ],
      },
    
    {
        question: "The most common cause of congenital hypothyroidism is ___ _",
        answers: [
          { text: "Thyroiditis", correct: false },
          { text: "Thyroid dysgenesis", correct: true },
          { text: "Iodine deficiency", correct: false },
          { text: "Thyroid dyshormonogenesis", correct: false },
        ],
      },
    
    
    {
        question: "A 1-year-old child presents with lethargy and has poor activities. Clinical examination shows a palpable goitre. Laboratory investigations revealed a low T4 and elevated TSH levels. Which of the following is the most likely diagnosis?",
        answers: [
          { text: "Thyroid dyshormonogenesis", correct: true },
          { text: "Thyroid dysgenesis", correct: false },
          { text: "Central hypothyroidism", correct: false },
          { text: "Antithyroid antibodies", correct: false },
        ],
      },
    
    
     {
        question: "At how many weeks of gestation does thyroxine secretion begin in fetus?",
        answers: [
          { text: "28 Weeks", correct: false },
          { text: "20 weeks", correct: false },
          { text: "12 weeks", correct: true },
          { text: " 6 weeks", correct: false },
        ],
      },
    
    {
        question: "A 4-month-old baby presented with a history of constipation. Clinical examination reveals jaundice and hypotonia. His picture is provided below. What is the probable diagnosis? ",
        answers: [
          { text: "Congenital adrenal hyperplasia", correct: false },
          { text: "Growth hormone deficiency", correct: false },
          { text: "Congenital adrenal insufficiency", correct: false },
          { text: "Congenital hypothyroidism", correct: true },
        ],
      },
    
    
    {
        question: "Which of the following is not a feature of Pendred syndrome?",
        answers: [
          { text: "Goitre", correct: false },
          { text: "Autosomal recessive disorder", correct: false },
          { text: "Conductive hearing loss", correct: true },
          { text: "Defective gene on chromosome 7", correct: false },
        ],
      },
    
    
    
     {
        question: "A 9-day-old infant has elevated TSH level and low T4 level on newborn screening. If this condition is left untreated, which of the following is the infant likely to demonstrate in the first few months of life?",
        answers: [
          { text: "Hyperreflexia", correct: false },
          { text: "Hyperirritability", correct: false },
          { text: "Diarrhea", correct: false },
          { text: "Prolonged jaundice", correct: true },
        ],
      },
    
    {
        question: "Which of the following is not a feature of neonatal hypothyroidism?",
        answers: [
          { text: "Triangular facies with craniosynostosis", correct: true },
          { text: "Goitre", correct: false },
          { text: "Retardation of osseous development", correct: false },
          { text: "Epiphyseal dysgenesis", correct: false },
        ],
      },
    
    
    {
        question: "The false statement about newborn screening test done for hypothyroidism is----",
        answers: [
          { text: "Simultaneous measurement of T4 and TSH levels is the ideal method", correct: false },
          { text: "The sample is obtained by heel-prick between 1-5 days of life using dried blood spot.", correct: false },
          { text: "Newborn screening always detects the affected twin in same-sex twins.", correct: true },
          { text: "Primary TSH, back up T4 screening method most common strategy used.", correct: false },
        ],
      },
    
    
     {
        question: "As an intern posted in paediatrics, you are asked to perform a heel prick test on a newborn. Which of the following results is suggestive of primary hypothyroidism?",
        answers: [
          { text: "Low T4 level and low TSH level", correct: false },
          { text: "Low T4 level and high TSH level", correct: true },
          { text: "High T 4 level and low TSH level", correct: false },
          { text: "High T 4 level and high TSH level", correct: false },
        ],
      },
    
    {
        question: "The image given below depicts an x-ray of the knee in a term baby. Which among the following conditions is associated with it?",
        answers: [
          { text: "Congenital hypothyroidism", correct: true },
          { text: "Graves disease", correct: false },
          { text: "Hyperthyroidism", correct: false },
          { text: "Osteogenesis imperfecta", correct: false },
        ],
      },
    
    
    {
        question: "A 13-year-old girl presents with a neck swelling, which began more than a year ago. Blood tests reveal slightly elevated TSH levels and the presence of thyroid peroxidaseantibodies. Which of the following is the most likely diagnosis? ",
        answers: [
          { text: "Iodine deficiency", correct: false },
          { text: "Congenital hypothyroidism", correct: false },
          { text: "Graves disease", correct: false },
          { text: "Chronic lymphocytic thyroiditis", correct: true },
        ],
      },
    
    
     {
        question: "Which of the following statements is false about neonatal hyperthyroidism?",
        answers: [
          { text: "Maternal Graves' disease is the most common cause of neonatal hyperthyroidism", correct: false },
          { text: "It results from the transplacental passage of maternal stimulatory TSH receptor antibody (TSHR-Ab).", correct: false },
          { text: "Microcephaly and frontal bossing with triangular facies are common clinical findings", correct: false },
          { text: "Neonatal hyperthyroidism occurs in 50% of infants born to mothers with a history of Graves' disease", correct: true },
        ],
      },
    
    {
        question: "The antibody most commonly seen in Grave's disease is __",
        answers: [
          { text: "Anti-TPO antibody", correct: false },
          { text: "TSH receptor stimulating antibody", correct: true },
          { text: "TSH receptor blocking antibody", correct: false },
          { text: "Anti-Tg antibody", correct: false },
        ],
      },
    
    
    {
        question: "Conditions associated with Grave’s disease are all except ___ _",
        answers: [
          { text: "Vitiligo", correct: false },
          { text: "Pernicious anemia", correct: false },
          { text: "Diabetes mellitus type 2", correct: true },
          { text: "Addison disease", correct: false },
        ],
      },
    
    
     {
        question: "An 11-year-old girl was brought by her parents with complaints of weight loss,increased appetite and a decline in scholastic performance. Following investigations, a diagnosis of Grave's disease is made. Which of the following is the drug of choice for initial therapy?",
        answers: [
          { text: "Propylthiouracil", correct: false },
          { text: "Methimazole", correct: true },
          { text: "Radioactive iodine", correct: false },
          { text: "Levothyroxine", correct: false },
        ],
      },
    
    {
        question: "Manifestations of endemic cretinism include------",
        answers: [
          { text: "Deafness and facial nerve involvement", correct: false },
          { text: "Blindness and hypothyroidism", correct: false },
          { text: "Strabismus and spastic diplegias", correct: true },
          { text: "Reversible mental retardation", correct: false },
        ],
      },
    
    
    {
        question: "A 12-year-old girl presents with mental retardation, deaf-mutism, joint disturbance, and clonus. She has goiter but is euthyroid and has normal pubertal development. The most likely diagnosis is __",
        answers: [
          { text: "Neurological endemic cretinism", correct: true },
          { text: "Grave's disease", correct: false },
          { text: "Pendred syndrome", correct: false },
          { text: "Myxedematous endemic cretinism", correct: false },
        ],
      },
    
     {
        question: "A 16-year-old boy is brought to you by his parents as they are worried that he is not growing. On assessment, his height and weight are normal for his age. To assess puberty, what is the first sign you would look for?",
        answers: [
          { text: "Increase in testicular volume", correct: true },
          { text: "Penile growth", correct: false },
          { text: "Pigmentation of the scrotum", correct: false },
          { text: "Pubarche", correct: false },
        ],
      },
    
    {
        question: "Precocious puberty in girls is defined by the onset of secondary sexual characteristics before the age of. __",
        answers: [
          { text: "5 years", correct: false },
          { text: "7 years", correct: false },
          { text: "8 years", correct: true },
          { text: "9 years", correct: false },
        ],
      },
    
    
    {
        question: "Which of the following is the most common brain lesion causing central precocious puberty?",
        answers: [
          { text: "Pituitary adenoma", correct: false },
          { text: "Tuberous sclerosis", correct: false },
          { text: "Astrocytoma", correct: false },
          { text: "Hypothalamic hamartoma", correct: true },
        ],
      },
    
    
     {
        question: "Which of the following is not a cause of precocious puberty in girls?",
        answers: [
          { text: "Hypothalamic hamartoma", correct: false },
          { text: "Hypothyroidism", correct: false },
          { text: "McCune-Albright syndrome", correct: false },
          { text: "Prader-Willi syndrome", correct: true },
        ],
      },
    
    {
        question: "A 6-year-old girl presents with precocious puberty, bony lesions, and hyperpigmented skin lesions, as shown below. What is the most probable diagnosis?",
        answers: [
          { text: "Prader-Willi Syndrome", correct: false },
          { text: "Reifenstein Syndrome", correct: false },
          { text: "McCune-Albright syndrome", correct: true },
          { text: "Polyostotic fibrous dysplasia", correct: false },
        ],
      },
    
    
    {
        question: "What is the drug of choice for treatment of central precocious puberty?",
        answers: [
          { text: "Cyproterone", correct: false },
          { text: "Danazol", correct: false },
          { text: "Medroxyprogesterone", correct: false },
          { text: "GnRH agonists", correct: true },
        ],
      },
    
    
     {
        question: "The most common cause of delayed puberty in males is",
        answers: [
          { text: "Kallman syndrome", correct: false },
          { text: "Klinefelter syndrome", correct: false },
          { text: "Constitutional delay", correct: true },
          { text: "Prader-Willi syndrome", correct: false },
        ],
      },
    
    {
        question: "Delayed puberty in girls is when lack of development of secondary sexual characters beyond the age of _",
        answers: [
          { text: "15 years", correct: false },
          { text: " 14 years", correct: false },
          { text: "13 years", correct: true },
          { text: "12 years", correct: false },
        ],
      },
    
    
    {
        question: "A child with decreased levels of LH, FSH, and testosterone presents with delayed puberty. Which of the following is the most likely diagnosis?",
        answers: [
          { text: "Klinefelter's syndrome", correct: false },
          { text: "Kallman's syndrome", correct: true },
          { text: "Androgen insensitivity syndrome", correct: false },
          { text: "Testicular infection", correct: false },
        ],
      },
    
    
     {
        question: "All of the following are features of Laurence-Moon-Biedil syndrome except",
        answers: [
          { text: "Obesity", correct: false },
          { text: "Mental retardation", correct: false },
          { text: "Polydactyly", correct: false },
          { text: "Hypotension", correct: true },
        ],
      },
    
    {
        question: "Gonads to testes differentiation is most importantly determined by",
        answers: [
          { text: "SRY gene", correct: true },
          { text: "WNT-4 gene", correct: false },
          { text: "DAX1 gene", correct: false },
          { text: "WT1 gene", correct: false },
        ],
      },
    
    
    {
        question: "A female child presents with bilateral inguinal masses, which were thought to be hernias but were found to be testes in the inguinal canals. Which karyotype would you expect to find in the child?",
        answers: [
          { text: "46, XX", correct: false },
          { text: "46, XY", correct: true },
          { text: "46.XXY", correct: false },
          { text: "45.XX", correct: false },
        ],
      },
    
    
    
     {
        question: "Which one of the following is false about testicular feminizing syndrome?",
        answers: [
          { text: " Male gonads are normal", correct: false },
          { text: "Internal female genitalia is normal.", correct: true },
          { text: "Affected Individuals have female phenotype.", correct: false },
          { text: "Sexual hair is absent", correct: false },
        ],
      },
    
    {
        question: "Female pseudohermaphroditism is __",
        answers: [
          { text: "XY genotype, female external genitalia", correct: false },
          { text: "Female external genitalia male internal genitalia", correct: false },
          { text: "XX genotype, male external genitalia", correct: true },
          { text: "Both options A and B", correct: false },
        ],
      },
    
    
    {
        question: "What is true about ovotesticular disorder of sex development?",
        answers: [
          { text: "Karyotype is 46 XY", correct: false },
          { text: "Ovotestis is seen in the gonadal biopsy.", correct: true },
          { text: "The response of testosterone to hCG is increased.", correct: false },
          { text: "Uterus is usually absent", correct: false },
        ],
      },
    
    
     {
        question: "A 3-year-old girl was brought by her mother with complaints of enlarged clitoris.  Karyotype revealed 46XX. What is the likely cause?",
        answers: [
          { text: "21 hydroxylase deficiency", correct: true },
          { text: "11 hydroxylase deficiency", correct: false },
          { text: "3 beta dehydrogenase deficiency", correct: false },
          { text: "2, 3 lyase deficiency", correct: false },
        ],
      },
    
    {
        question: "The amount of total body water (TBW) in a term neonate weighing 3kg is approximately _",
        answers: [
          { text: "1.2 L", correct: false },
          { text: "1.8 L", correct: false },
          { text: "2.25 L", correct: true },
          { text: " 2.75 L", correct: false },
        ],
      },
    
    
    {
        question: "What is the procedure being performed?",
        answers: [
          { text: "Pus drainage in acute osteomyelitis", correct: false },
          { text: "Drainage kept after joint surgery", correct: false },
          { text: "Intraosseous fluid transfusion in shock", correct: true },
          { text: "Fixed suction catheter", correct: false },
        ],
      },
    
    
     {
        question: "The initial fluid of choice for treating diarrhea in an infant is __ _",
        answers: [
          { text: "Salt water", correct: false },
          { text: "Oral rehydration solution (ORS)", correct: true },
          { text: "Rice water", correct: false },
          { text: "Dextrose", correct: false },
        ],
      },
    
    {
        question: "A 9-year-old boy who has been operated for craniopharyngioma complains of polyuria and polydipsia. On investigation, the serum osmolality is 305 mOsm/kg and urine osmolality is 250 mOsm/kg. Atrial natriuretic peptide (ANP) level is normal. What could be the cause?",
        answers: [
          { text: "Post-operative diuresis", correct: false },
          { text: "Syndrome of inappropriate antidiuretic hormone (ADH) secretion (SIADH)", correct: false },
          { text: "Post-surgical central diabetes insipidus (DI)", correct: true },
          { text: "Cerebral salt-wasting syndrome", correct: false },
        ],
      },
    
    
    {
        question: "Which of the following is true regarding zinc supplementation in children with diarrhea?",
        answers: [
          { text: "It leads to reduced duration, severity, and recurrence of diarrhea.", correct: false },
          { text: "It reduces the inappropriate use of antimicrobials.", correct: false },
          { text: "It is given at a dose of 20 mg/day for 10- 14 days.", correct: false },
          { text: "All the above", correct: true },
        ],
      },
    
    
     {
        question: "A 5-year-old child brought to the hospital with a history of loose stools, but no history of fever or blood in stools. The mother says he is irritable and drinks water hastily when given. On examination, eyes are sunken and during the skin pinch test, the skin retracted within two seconds but not immediately. What is treatment for the child?",
        answers: [
          { text: "Administer the first dose of IV antibiotic and immediately refer to a higher center", correct: false },
          { text: "Give oral fluids and ask the mother to continue the same and visit again the next day", correct: false },
          { text: "Give zinc supplementation and oral rehydration solution only and ask mother to come back if some danger signs develop.", correct: true },
          { text: "Consider severe dehydration, start intravenous (IV) fluids, IV antibiotics and refer to a higher centre.", correct: false },
        ],
      },
    
    {
        question: "Which of the following is not true about reduced (low)-osmolarity oral rehydration solution (ORS)?",
        answers: [
          { text: "It contains 20 mmol of potassium per litre  ", correct: false },
          { text: "Glucose is an essential component", correct: false },
          { text: "Total osmolarity is 254 mmol/litre", correct: true },
          { text: "Citrate is provided to prevent or correct base deficit acidosis", correct: false },
        ],
      },
    
    
    {
        question: "The amount of sodium present in ReSoMal is ___ _",
        answers: [
          { text: "60mmol/L", correct: false },
          { text: "75mmol/L", correct: false },
          { text: "45 mmol/L", correct: true },
          { text: "85 mmol/L", correct: false },
        ],
      },
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
      
]







const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const backButton = document.getElementById("back-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz (){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    backButton.innerHTML = "Back";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    
    if(answer.correct){
        button.dataset.correct = answer.correct;  
    }
    button.addEventListener("click", selectAnswer)

})
}


function resetState(){
nextButton.style.display = "none";
backButton.style.display = "none";

while(answerButtons.firstChild){
answerButtons.removeChild(answerButtons.firstChild);

}
}

function selectAnswer(e){

    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else{
    selectedBtn.classList.add("inCorrect")
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
        button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "inline";
    backButton.style.display = "inline";

}


function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length} !`;
    nextButton.innerHTML = "Solve Again";
    nextButton.style.display = "inline"
    backButton.style.display = "inline"
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else { showScore()}
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length) {
    handleNextButton();
    } else{
        startQuiz();
    }
});

function handlebackButton(){
  currentQuestionIndex--;
  if(currentQuestionIndex < questions.length){
      showQuestion();
  } else { showScore()}
}

backButton.addEventListener("click", ()=>{
  if(currentQuestionIndex < questions.length) {
  handlebackButton();
  } else{
      startQuiz();
  }
});
startQuiz();