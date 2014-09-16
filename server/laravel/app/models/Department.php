<?php

use Doctrine\ORM\Mapping as ORM;

/**
 * Department
 *
 * @ORM\Table(name="departments")
 * @ORM\Entity
 */
class Department
{
    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="name", type="string")
     */
    private $name;

    /**
     * @var string
     *
     * @ORM\Column(name="description", type="string")
     */
    private $description;

    /**
     * @var \Doctrine\Common\Collections\Collection
     *
     * @ORM\OneToMany(targetEntity="Employee", mappedBy="department")
     */
    private $employees;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->employees = new \Doctrine\Common\Collections\ArrayCollection();
    }


    /**
     * Get id.
     *
     * @return integer
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set name.
     *
     * @param string $name
     *
     * @return Department
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name.
     *
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set description.
     *
     * @param string $description
     *
     * @return Department
     */
    public function setDescription($description)
    {
        $this->description = $description;

        return $this;
    }

    /**
     * Get description.
     *
     * @return string
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Add employee.
     *
     * @param Employee $employee
     *
     * @return Department
     */
    public function addEmployee(Employee $employee)
    {
        $this->employees[] = $employee;

        return $this;
    }

    /**
     * Remove employee.
     *
     * @param Employee $employee
     */
    public function removeEmployee(Employee $employee)
    {
        $this->employees->removeElement($employee);
    }

    /**
     * Get employees.
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getEmployees()
    {
        return $this->employees;
    }
}
