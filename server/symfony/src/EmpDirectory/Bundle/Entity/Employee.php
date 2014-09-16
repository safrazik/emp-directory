<?php

namespace EmpDirectory\Bundle\Entity;

/**
 * Employee
 */
class Employee
{
    /**
     * @var integer
     */
    private $id;

    /**
     * @var string
     */
    private $firstName;

    /**
     * @var string
     */
    private $lastName;

    /**
     * @var \DateTime
     */
    private $dateOfBirth;

    /**
     * @var string
     */
    private $email;

    /**
     * @var string
     */
    private $officePhone;

    /**
     * @var string
     */
    private $cellPhone;

    /**
     * @var string
     */
    private $bio;

    /**
     * @var string
     */
    private $website;

    /**
     * @var string
     */
    private $twitter;

    /**
     * @var string
     */
    private $profilePic;

    /**
     * @var \Doctrine\Common\Collections\Collection
     */
    private $directReports;

    /**
     * @var Department
     */
    private $department;

    /**
     * @var Job
     */
    private $job;

    /**
     * @var Employee
     */
    private $manager;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->directReports = new \Doctrine\Common\Collections\ArrayCollection();
    }

    /**
     * Get id
     *
     * @return integer 
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set firstName
     *
     * @param string $firstName
     * @return Employee
     */
    public function setFirstName($firstName)
    {
        $this->firstName = $firstName;

        return $this;
    }

    /**
     * Get firstName
     *
     * @return string 
     */
    public function getFirstName()
    {
        return $this->firstName;
    }

    /**
     * Set lastName
     *
     * @param string $lastName
     * @return Employee
     */
    public function setLastName($lastName)
    {
        $this->lastName = $lastName;

        return $this;
    }

    /**
     * Get lastName
     *
     * @return string 
     */
    public function getLastName()
    {
        return $this->lastName;
    }

    /**
     * Set dateOfBirth
     *
     * @param \DateTime $dateOfBirth
     * @return Employee
     */
    public function setDateOfBirth($dateOfBirth)
    {
        $this->dateOfBirth = $dateOfBirth;

        return $this;
    }

    /**
     * Get dateOfBirth
     *
     * @return \DateTime 
     */
    public function getDateOfBirth()
    {
        return $this->dateOfBirth;
    }

    /**
     * Set email
     *
     * @param string $email
     * @return Employee
     */
    public function setEmail($email)
    {
        $this->email = $email;

        return $this;
    }

    /**
     * Get email
     *
     * @return string 
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * Set officePhone
     *
     * @param string $officePhone
     * @return Employee
     */
    public function setOfficePhone($officePhone)
    {
        $this->officePhone = $officePhone;

        return $this;
    }

    /**
     * Get officePhone
     *
     * @return string 
     */
    public function getOfficePhone()
    {
        return $this->officePhone;
    }

    /**
     * Set cellPhone
     *
     * @param string $cellPhone
     * @return Employee
     */
    public function setCellPhone($cellPhone)
    {
        $this->cellPhone = $cellPhone;

        return $this;
    }

    /**
     * Get cellPhone
     *
     * @return string 
     */
    public function getCellPhone()
    {
        return $this->cellPhone;
    }

    /**
     * Set bio
     *
     * @param string $bio
     * @return Employee
     */
    public function setBio($bio)
    {
        $this->bio = $bio;

        return $this;
    }

    /**
     * Get bio
     *
     * @return string 
     */
    public function getBio()
    {
        return $this->bio;
    }

    /**
     * Set website
     *
     * @param string $website
     * @return Employee
     */
    public function setWebsite($website)
    {
        $this->website = $website;

        return $this;
    }

    /**
     * Get website
     *
     * @return string 
     */
    public function getWebsite()
    {
        return $this->website;
    }

    /**
     * Set twitter
     *
     * @param string $twitter
     * @return Employee
     */
    public function setTwitter($twitter)
    {
        $this->twitter = $twitter;

        return $this;
    }

    /**
     * Get twitter
     *
     * @return string 
     */
    public function getTwitter()
    {
        return $this->twitter;
    }

    /**
     * Set profilePic
     *
     * @param string $profilePic
     * @return Employee
     */
    public function setProfilePic($profilePic)
    {
        $this->profilePic = $profilePic;

        return $this;
    }

    /**
     * Get profilePic
     *
     * @return string 
     */
    public function getProfilePic()
    {
        return $this->profilePic;
    }

    /**
     * Add directReports
     *
     * @param Employee $directReports
     * @return Employee
     */
    public function addDirectReport(Employee $directReports)
    {
        $this->directReports[] = $directReports;

        return $this;
    }

    /**
     * Remove directReports
     *
     * @param Employee $directReports
     */
    public function removeDirectReport(Employee $directReports)
    {
        $this->directReports->removeElement($directReports);
    }

    /**
     * Get directReports
     *
     * @return \Doctrine\Common\Collections\Collection 
     */
    public function getDirectReports()
    {
        return $this->directReports;
    }

    /**
     * Set department
     *
     * @param Department $department
     * @return Employee
     */
    public function setDepartment(Department $department = null)
    {
        $this->department = $department;

        return $this;
    }

    /**
     * Get department
     *
     * @return Department 
     */
    public function getDepartment()
    {
        return $this->department;
    }

    /**
     * Set job
     *
     * @param Job $job
     * @return Employee
     */
    public function setJob(Job $job = null)
    {
        $this->job = $job;

        return $this;
    }

    /**
     * Get job
     *
     * @return Job 
     */
    public function getJob()
    {
        return $this->job;
    }

    /**
     * Set manager
     *
     * @param Employee $manager
     * @return Employee
     */
    public function setManager(Employee $manager = null)
    {
        $this->manager = $manager;

        return $this;
    }

    /**
     * Get manager
     *
     * @return Employee 
     */
    public function getManager()
    {
        return $this->manager;
    }

    private $profilePicContent;

    private $oldProfilePic;

    public function setProfilePicContent($profilePicContent){
        if(!$profilePicContent){
            return;
        }
        $this->oldProfilePic = $this->profilePic;
        // set profilePic temporarily. Workaround to notify doctrine of the entity state's change when only profilePicContent is updated
        $this->profilePic = md5($profilePicContent);
        $this->profilePicContent = $profilePicContent;
    }

    public function getProfilePicContent(){
        return null; // this is write only property
    }

    public function getProfilePicsDirectory(){
        return __DIR__.'/../../../../../pics';
    }

    public function saveProfilePic() {
        $profilePicContent = $this->profilePicContent; // e.g: "data:image/png;base64,iVBORw0KGgoAAAAN...ASUVORK5CYII="
        $ext = 'jpg';
        if(strpos($profilePicContent, ',') !== false){
            $exploded = explode(',', $profilePicContent);
            if(isset($exploded[1])){
                $profilePicContent = $exploded[1];
                $ext = str_replace(array('data:', 'image/', ';base64'), '', $exploded[0]);
                if($ext == 'jpeg'){
                    $ext = 'jpg';
                }
            }
        }
        if ($base64Decoded = base64_decode($profilePicContent)) {
            $this->profilePicContent = null;
            // $this->profilePic = strtolower($this->firstName.'_'.$this->lastName.'_'.md5($profilePicContent).'.'.$ext);
            $this->profilePic = $this->firstName.'_'.$this->lastName.'.'.$ext;
            @unlink($this->getProfilePicsDirectory().'/'.$this->oldProfilePic);
            $ok = @file_put_contents($this->getProfilePicsDirectory().'/'.$this->profilePic, $base64Decoded);
            if(!$ok){
                throw new \Exception('Profile picture not saved');
            }
        } else {
            
        }
    }

    // demonstrating server side validation errors
    public function customValidation(\Symfony\Component\Validator\ExecutionContextInterface $context){

        // somehow you have an array of "fake names"
        $fakeNames = array('lorem', 'ipsum');

        // check if the name is actually a fake name
        if (in_array(strtolower($this->getFirstName()), $fakeNames)) {
            $context->addViolationAt(
                'firstName',
                'This name sounds totally fake!',
                array(),
                null
            );
        }
    }
}