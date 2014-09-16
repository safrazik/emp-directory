<?php

namespace EmpDirectory\Bundle\Entity;

class Department {

    /**
     * @var string
     */
    private $name;

    /**
     * @var string
     */
    private $description;

    /**
     * @var integer
     */
    private $id;

    /**
     * @var \Doctrine\Common\Collections\Collection
     */
    private $employees;

    /**
     * Constructor
     */
    public function __construct() {
        $this->employees = new \Doctrine\Common\Collections\ArrayCollection();
    }

    /**
     * Set name
     *
     * @param string $name
     * @return Department
     */
    public function setName($name) {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name
     *
     * @return string 
     */
    public function getName() {
        return $this->name;
    }

    /**
     * Set description
     *
     * @param string $description
     * @return Department
     */
    public function setDescription($description) {
        $this->description = $description;

        return $this;
    }

    /**
     * Get description
     *
     * @return string 
     */
    public function getDescription() {
        return $this->description;
    }

    /**
     * Get id
     *
     * @return integer 
     */
    public function getId() {
        return $this->id;
    }

    /**
     * Add employees
     *
     * @param Employee $employees
     * @return Department
     */
    public function addEmployee(Employee $employees) {
        $this->employees[] = $employees;

        return $this;
    }

    /**
     * Remove employees
     *
     * @param Employee $employees
     */
    public function removeEmployee(Employee $employees) {
        $this->employees->removeElement($employees);
    }

    /**
     * Get employees
     *
     * @return \Doctrine\Common\Collections\Collection 
     */
    public function getEmployees() {
        return $this->employees;
    }

}
